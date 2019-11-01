import {
  EXCHANGEC,
  EXCHANGED,
  BOOK_PERCENT,
  TIMER,
  BASE,
  TOKEN
} from "babel-dotenv";
import { mapSeries } from "async";

import ExchangeC from "../api/exchanges-c/ExchangeC";
import ExchangeD from "../api/exchanges-d/ExhangeD";
import { getPairs, connect, disconnect } from "../utils/storage";
import { parseTokenFromBittrexPair } from "../utils/formatter";
import DEXAG from "../api/exchanges-d/Dexag";
import Bittrex from "../api/exchanges-c/Bittrex";
import { default as tokens } from "../tokens";
import { notifyByEmail } from "../utils/notifier";
import { default as types } from "../constants/types";
import CoinMarketCap from "../api/Coinmarketcap";
import { default as logger } from "../utils/logger";

let dexag = new DEXAG(null);
let bittrex = new Bittrex(null);

async function noHoldTrade(bPair, dToken) {
  //check ETH balance on Bittrex
  //Validate a ETH <-> Token and percentage profit
  //expenses = transfer-cost + txFee + withdrawCost
  /*if(Price_Uniswap > Price_Bittrex + profit + expenses){
        BUY on Bittrex
        WITHDRAW to UNISWAP account
        SELL on UNISWAP

    }*/

  /*if(Price_Bittrex > Price_Uniswap + profit + expenses){
        BUY on UNISWAP
        DEPOSIT to Bittrex account
        SELL on Bittrex
    }*/

  buyDexagSellBittrex(bPair, dToken);
  sellDexagBuyBittrex(bPair, dToken);
}

/**
 * take a pair from list, check percent if not
 * above threshold then go to next pair in a
 * round robin way.
 */
async function merryGoRound() {
  //let pairsToWatch =  tokens[EXCHANGEC].filter(token => tokens[EXCHANGED].includes(token))
  logger.info(pairsToWatch);
  let pairsToWatch = ["AMPL", "LOOM"];
  await mapSeries(pairsToWatch, initializeBuyCSellD);
  await mapSeries(pairsToWatch, initializeSellCBuyD);
  merryGoRound();
}

async function initializeBuyCSellD(token) {
  logger.info(
    `--------- BUY (${EXCHANGEC}) ------ SELL(${EXCHANGED})-------------`
  );
  let exc = new ExchangeC(EXCHANGEC);
  let exd = new ExchangeD(EXCHANGED);
  let pair = exc.formatToPair(token, BASE);
  logger.info(`Watching ${token}-${BASE}`);
  let cmc = new CoinMarketCap(null);
  let tokenAddress = await cmc.getTokenAddress(token);
  let { sell } = await exc.getOrderbook(pair);
  let rates = await exd.getRate(
    token,
    BASE,
    sell[1][1].toString(),
    tokenAddress,
    null
  );
  logger.info(rates);
  let prcnt = 0;

  if (rates > 0) {
    prcnt = (rates - sell[1][2]) / sell[1][2];
  }
  logger.info(sell[1]);
  logger.info(`------------- ${prcnt} --------------------`);

  if (prcnt * 100 < BOOK_PERCENT) {
    logger.info(`Percent - ${prcnt * 100} No Fun....Ditching ${token}-${BASE}`);
  } else {
    let message = {
      buyFrom: EXCHANGEC,
      sellTo: EXCHANGED,
      pair: `${token}-${BASE}`,
      buyPrice: sell[1][2],
      sellPrice: rates,
      amount: sell[1][1]
    };
    await notifyByEmail(types.TRADE_BUYC_SELLD, message);
  }
}

async function initializeSellCBuyD(token) {
  logger.info(
    `--------- BUY (${EXCHANGED}) ------ SELL(${EXCHANGEC})-------------`
  );
  let exc = new ExchangeC(EXCHANGEC);
  let exd = new ExchangeD(EXCHANGED);
  let pair = exc.formatToPair(token, BASE);
  logger.info(`Watching ${token}-${BASE}`);
  let cmc = new CoinMarketCap(null);
  let tokenAddress = await cmc.getTokenAddress(token);
  let { buy } = await exc.getOrderbook(pair);
  let rates = await exd.getRate(
    BASE,
    token,
    buy[1][1].toString(),
    null,
    tokenAddress
  );
  logger.info(rates);
  let prcnt = 0;
  if (rates > 0) {
    prcnt = (rates - buy[1][2]) / buy[1][2];
  }
  logger.info(buy[1]);
  logger.info(`------------- ${prcnt} --------------------`);

  if (prcnt * 100 < BOOK_PERCENT) {
    logger.info(`Percent - ${prcnt * 100} No Fun....Ditching ${token}-${BASE}`);
  } else {
    let message = {
      buyFrom: EXCHANGED,
      sellTo: EXCHANGEC,
      pair: `${token}-${BASE}`,
      sellPrice: buy[1][2],
      buyPrice: rates,
      quantity: buy[1][1]
    };
    await notifyByEmail(types.TRADE_BUYD_SELLC, message);
  }
}

export { merryGoRound };
