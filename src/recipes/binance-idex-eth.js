import { default as store } from "../store";
import Binance from "../api/exchanges-c/Binance";
import Idex from "../api/exchanges-d/Idex";
import { default as _ } from "lodash";
import { BOOK_PERCENT } from "babel-dotenv";
import { default as logger } from "../utils/logger";

export default async function startWatching() {
  try {
    let binance = new Binance(store);

    /*let unsubscribe = store.subscribe(async () => {
             
              logger.info(JSON.stringify(store.getState()))
              logger.info('*****************************************************')    
        });*/

    let idex = new Idex(store);
    //find common pairs
    let commonPairs = await findCommonPairs(binance, idex);

    //set pairs to track
    let bPairs = await getBinancePairs(commonPairs);
    binance.setPairs(bPairs);
    idex.setPairs(commonPairs);
    binance.start();
    idex.start();

    //start checking for deals
    setInterval(checkForDeals, 5000, store);
  } catch (e) {
    logger.info(e);
  }
}

async function getBinancePairs(commonPairs) {
  return await Promise.all(
    commonPairs.map(pair => {
      let tempPair = pair.split("_");
      return `${tempPair[1].toLowerCase()}${tempPair[0].toLowerCase()}`;
    })
  );
}

function checkForDeals(store) {
  logger.info("Checking for Deals");
  var { binance, idex } = store.getState();
  for (let pair in idex) {
    let tempPair = pair.split("_");
    let bPair = `${tempPair[1].toLowerCase()}${tempPair[0].toLowerCase()}`;
    logger.info(pair, idex[pair], binance[bPair]);
    calculateProfitability(pair, idex[pair], binance[bPair]);
  }
  /*_(idex, function(value, iPair, iPairObj) {
    let tempPair = iPair.split("_");
    let bPair = `${tempPair[1].toLowerCase()}${tempPair[0].toLowerCase()}`;
    logger.info(iPair, iPairObj, binance[bPair]);
    calculateProfitability(iPair, iPairObj, binance[bPair]);
  });*/
}

async function matchPairs(binance, idex) {
  let bPairs = await binance.getPairs();
  let iPairs = await idex.getPairs();
  //transform idex pairs to match binance pair format
  let formattedPairs = await idex.formatPairs(iPairs);
  let commonPairs = _.intersection(bPairs, formattedPairs);
  logger.info(commonPairs.length);
  return commonPairs;
}

async function findCommonPairs(binance, idex) {
  //get pairs for A
  let bPairs = await binance.getPairs();
  //get pairs for B
  let iPairs = await idex.getPairs();
  //filter eth pairs of A
  let _bPairs = await Promise.all(
    bPairs.map(pair => {
      if (pair.includes("eth")) {
        let quote = pair.split("eth").filter(Boolean);
        if (quote.length == 1) {
          return `ETH_${quote.join().toUpperCase()}`;
        }
      }
    })
  );
  let _bPairs_ = _bPairs.filter(Boolean);
  let commonPairs = _.intersection(_bPairs_, iPairs);
  logger.info(commonPairs.length);
  return commonPairs;
}

async function calculateProfitability(pair, pairOnIdex, pairOnBinance) {
  logger.info(`calculating profitability for ${pair}`);
  logger.info(JSON.stringify(pairOnBinance));
  logger.info(JSON.stringify(pairOnIdex));
  let { buy: iBuy, sell: iSell } = pairOnIdex;
  let { buy: bBuy, sell: bSell } = pairOnBinance;
  //sort buys in descending order to get highest bids
  let sortedIBuyPrices = Object.keys(iBuy)
    .sort()
    .reverse();
  let sortedBBuyPrices = Object.keys(bBuy)
    .sort()
    .reverse();

  //sort asks in ascending order to get lowest asks
  let sortedISellPrices = Object.keys(iSell).sort();
  let sortedBSellPrices = Object.keys(bSell).sort();

  if (
    _calculatePercentageProfit(sortedBSellPrices[0], sortedIBuyPrices[0]) >=
    BOOK_PERCENT
  ) {
    logger.info(
      `$$$$$$$$$$$$$$$$$$$$$$$ ${pair} $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`
    );
    logger.info(
      `| Buy@(${sortedBSellPrices[0]}) on IDEX - Sell@(${
        sortedIBuyPrices[0]
      }) on Binance| >= ${BOOK_PERCENT}%`
    );

    await notifyByEmail(
      pair + " :: Buy@Idex <-> Sell@Binance",
      `| Buy@(${sortedBSellPrices[0]}) on IDEX - Sell@(${
        sortedIBuyPrices[0]
      }) on Binance| >= ${BOOK_PERCENT}%`
    );
    return;
  } else if (
    _calculatePercentageProfit(sortedISellPrices[0], sortedBBuyPrices[0]) >=
    BOOK_PERCENT
  ) {
    logger.info(
      `$$$$$$$$$$$$$$$$$$$$$$$$$ ${pair}  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`
    );
    logger.info(
      `| Buy@(${sortedISellPrices[0]}) on Binance - Sell@(${
        sortedBBuyPrices[0]
      }) on Idex| >= ${BOOK_PERCENT}%`
    );

    await notifyByEmail(
      pair + " :: Buy@Binance <-> Sell@Idex",
      `| Buy@(${sortedISellPrices[0]}) on Binance - Sell@(${
        sortedBBuyPrices[0]
      }) on Idex| >= ${BOOK_PERCENT}%`
    );
    return;
  } else {
    logger.info(`!!!!!!!!!!!!!!!!!!!!  ${pair}   !!!!!!!!!!!!!!!!!!!!!!!!!!`);
    logger.info(
      `| Buy@(${sortedISellPrices[0]}) on Binance - Sell@(${
        sortedBBuyPrices[0]
      }) on Idex| < ${BOOK_PERCENT}%`
    );
    logger.info(
      `| Buy@(${sortedBSellPrices[0]}) on IDEX - Sell@(${
        sortedIBuyPrices[0]
      }) on Binance| < ${BOOK_PERCENT}%`
    );
  }
}

/**
 * calculate profit percentage based on cost and sold amounts
 * @param {} cost
 * @param {*} sold
 */
function _calculatePercentageProfit(cost, sold) {
  return ((sold - cost) / cost) * 100;
}
