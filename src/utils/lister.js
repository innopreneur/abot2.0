import BittrexTrades from "../api/exchanges-c/Bittrex";
import CoinMarketCap from "../api/Coinmarketcap";
import Uniswap from "../api/exchanges-d/uniswap/Uniswap";
import {
  connect,
  disconnect,
  updateListings,
  getListings,
  updatePairs
} from "./storage";
import { notifyByEmail } from "./notifier";
import { default as types } from "../constants/types";
import { default as store } from "../store";
import { wait, parseTokenFromBittrexPair } from "./formatter";
import { mapSeries } from "async";
import { default as logger } from "./logger";

async function updateBittrexListings() {
  let bittrex = new BittrexTrades(store);
  let markets = await bittrex.getAllMarkets();
  let listings = await Promise.all(markets.map(item => listing.MarketName));

  logger.info(JSON.stringify(listings));
  await connect();
  await updateListings("bittrex", listings);
  await disconnect();
  await notifyByEmail(types.UPDATE_LISTINGS_BITTREX, listings);
}

async function updateUniswapListings() {
  let cmcap = new CoinMarketCap(store);
  let uniswap = new Uniswap(store);
  let listings = await cmcap.getCryptoListings();
  let { data } = listings;

  let exchanges = [];
  let count = 0;
  let tokens = await Promise.all(
    data.filter(token => {
      return token.platform && token.platform.name == "Ethereum";
    })
  );

  await Promise.all(
    tokens.map(async (listing, index) => {
      try {
        if (index > 0 && index % 200 == 0) {
          logger.info(`Going to wait for counts ${index}`);
          wait(30);
        }
        // below (index % 8) defines which node to use. We use round robin method
        logger.info(`${index} : ${listing.symbol}`);
        let exchangeAddress = await uniswap.getExchangeForListings(
          listing.platform.token_address,
          index % 8
        );
        logger.info(`${index} : ${listing.symbol} : ${exchangeAddress}`);
        if (exchangeAddress != "0x0000000000000000000000000000000000000000") {
          let symbol = listing.symbol,
            name = listing.name,
            address = listing.platform.token_address,
            mcap = listing.quote.USD.market_cap,
            exchange = exchangeAddress;
          logger.info(
            `Index ${index} :: Node ${count % 8} :: ${listing.symbol},${
              listing.name
            },${listing.platform.token_address},${
              listing.quote.USD.market_cap
            }, ${exchangeAddress}`
          );

          exchanges.push({
            symbol,
            name,
            address,
            mcap,
            exchange
          });

          return;
        }
      } catch (err) {
        console.error(err.message, listing.symbol);
      }
    })
  );

  await connect();
  await updateListings("uniswap", exchanges);
  await disconnect();
  await notifyByEmail(types.UPDATE_LISTINGS_UNISWAP, exchanges);
}

async function getUniswapListings() {
  let cmcap = new CoinMarketCap(store);
  let listings = await cmcap.getCryptoListings();
  let { data } = listings;

  let tokens = await Promise.all(
    data.filter(token => {
      return token.platform && token.platform.name == "Ethereum";
    })
  );

  tokens.sort((ta, tb) => {
    let symA = ta.symbol.toUpperCase();
    let symB = tb.symbol.toUpperCase();

    if (symA < symB) return -1;
    if (symB < symA) return 1;
  });

  let exchanges = await mapSeries(tokens, getListing);

  await connect();
  await updateListings("uniswap", exchanges);
  await disconnect();
  await notifyByEmail(types.UPDATE_LISTINGS_UNISWAP, exchanges);
}

async function getListing(listing) {
  try {
    let uniswap = new Uniswap(store);
    let exchangeAddress = await uniswap.getExchangeForListings(
      listing.platform.token_address,
      0
    );

    if (exchangeAddress != "0x0000000000000000000000000000000000000000") {
      let symbol = listing.symbol,
        name = listing.name,
        address = listing.platform.token_address,
        mcap = listing.quote.USD.market_cap,
        exchange = exchangeAddress;
      let { eth: ethReserve, token: tokenReserve } = await uniswap.getPoolSize(
        listing.symbol,
        listing.platform.token_address
      );
      let pricePerToken = await uniswap.getTokenToEthInputPrice(
        listing.platform.token_address,
        1
      );
      logger.info(
        `${listing.symbol},${listing.name},${listing.platform.token_address},${listing.quote.USD.market_cap}, ${exchangeAddress}, ${ethReserve}, ${tokenReserve}, ${pricePerToken}`
      );

      return {
        symbol,
        name,
        address,
        mcap,
        exchange,
        ethReserve,
        tokenReserve
      };
    }
  } catch (err) {
    console.error(err.message, listing.symbol);
  }
}

async function _getUniswapExchange(uniswap, listing) {
  let exchangeAddress = await uniswap.getExchangeForListings(
    listing.platform.token_address
  );
  if (exchangeAddress != "0x0000000000000000000000000000000000000000") {
    let symbol = listing.symbol,
      name = listing.name,
      address = listing.platform.token_address,
      mcap = listing.quote.USD.market_cap,
      exchange = exchangeAddress;
    logger.info(
      `${listing.symbol},${listing.name},${listing.platform.token_address},${listing.quote.USD.market_cap}, ${exchangeAddress}`
    );

    return {
      symbol,
      name,
      address,
      mcap,
      exchange
    };
  }
}

/**
 * matches bittrex markets with uniswap exchanges
 */
async function matchUniswapBittrex() {
  let uniswap = new Uniswap(store);
  let cmc = new CoinMarketCap(store);

  await connect();
  let { listings: bListings } = await getListings("bittrex");
  await disconnect();

  let bMarkets = await Promise.all(
    bListings.map(async bItem => {
      if (bItem && bItem.startsWith("ETH-")) {
        let symbol = parseTokenFromBittrexPair(bItem);
        let tokenAddress = await cmc.getTokenAddress(symbol);
        logger.info(`Bittrex - ${bItem}`);
        let exchangeAddress = await uniswap.getExchange(tokenAddress);
        if (
          exchangeAddress &&
          exchangeAddress != "0x0000000000000000000000000000000000000000"
        ) {
          logger.info(`Item - ${bItem}, Address - ${exchangeAddress}`);
          return bItem;
        }
      }
    })
  );

  await connect();
  await updatePairs(["uniswap", "bittrex"], bMarkets);
  await disconnect();
  await notifyByEmail(types.MATCH_LISTING_UNISWAP_BITTREX, bMarkets);

  logger.info(bMarkets);
}

/**
 * matches bittrex markets with dexag exchanges
 */
async function matchDexagBittrex() {
  await connect();
  let { listings: bListings } = await getListings("bittrex");
  let { listings: dListings } = await getListings("dexag");
  await disconnect();

  let bMarkets = [];

  await Promise.all(
    dListings.map(async dItem => {
      if (dItem) {
        let market = await Promise.all(
          bListings.filter(bItem => {
            if (bItem.startsWith("ETH-") && bItem.indexOf(dItem) != -1) {
              return bItem;
            }
          })
        );

        if (market.length) {
          //logger.info(market)
          bMarkets.push(market.join());
        }
      }
    })
  );

  await connect();
  await updatePairs(["dexag", "bittrex"], bMarkets);
  await disconnect();
  await notifyByEmail(types.MATCH_LISTING_DEXAG_BITTREX, bMarkets);

  logger.info(bMarkets);
}
export {
  updateBittrexListings,
  updateUniswapListings,
  matchUniswapBittrex,
  matchDexagBittrex,
  getUniswapListings
};
