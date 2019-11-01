import { default as mongoose, get } from "mongoose";
import { MONGO_USER, MONGO_PASS } from "babel-dotenv";
import { State, Trades, Listing, Pairs } from "./models";
import { default as logger } from "./logger";

let currentState = {
  balances: [
    {
      account: "0x689C56AEf474Df92D44A1B70850f808488F9769C",
      type: "UNISWAP",
      tokens: [
        {
          symbol: "ETH",
          balance: 0.04
        },
        {
          symbol: "OCEAN",
          balance: 13455.2
        }
      ]
    },
    {
      account: "0x689C56AEf474Df92D44A1B70850f808488F9769C",
      type: "BITTREX",
      tokens: [
        {
          symbol: "ETH",
          balance: 1.4
        },
        {
          symbol: "OCEAN",
          balance: 10000
        }
      ]
    }
  ],
  dailyTrades: {
    total: 14,
    success: 7,
    failure: 1,
    missed: 6
  },
  lastModifiedOn: new Date(Date.now()).toISOString()
};

let currentTrade = {
  quantity: 10000,
  token: "OCEAN",
  buy: {
    exchange: "UNISWAP",
    pair: "ETH-OCEAN",
    cost: 1.3,
    txId: ""
  },
  sell: {
    exchange: "BITTREX",
    pair: "ETH-OCEAN",
    cost: 1.5,
    txId: ""
  },
  profit: 0.2,
  profitPercent: 13,
  result: "success",
  tradedOn: new Date(Date.now()).toISOString()
};

let bittrexListing = [
  "ETH-REP",
  "ETH-TUSD",
  "ETH-ADX",
  "ETH-TRX",
  "ETH-MKR",
  "ETH-SNT",
  "ETH-ENG",
  "ETH-DMT",
  "ETH-MCO",
  "ETH-BNT",
  "ETH-GNO",
  "ETH-CVC",
  "ETH-POLY",
  "ETH-NPXS",
  "ETH-XLM",
  "ETH-PAY",
  "ETH-ANKR",
  "ETH-FX",
  "ETH-STRAT",
  "ETH-VIB",
  "ETH-DAI",
  "ETH-LTC",
  "ETH-WAX",
  "ETH-XRP",
  "ETH-UKG",
  "ETH-QTUM",
  "ETH-SOLVE",
  "ETH-XMR",
  "ETH-ATOM",
  "ETH-BAT",
  "ETH-WAVES",
  "ETH-NEO",
  "ETH-DASH",
  "ETH-DGB",
  "ETH-BCH",
  "ETH-ETC",
  "ETH-ADA",
  "ETH-GNT",
  "ETH-OCN",
  "ETH-BSV",
  "ETH-ZEC",
  "ETH-ANT",
  "ETH-SRN",
  "ETH-OMG",
  "ETH-MANA",
  "ETH-XEM",
  "ETH-SC",
  "ETH-EOS",
  "ETH-POWR",
  "ETH-STORM",
  "ETH-ZRX",
  "ETH-VDX"
];
let dexagListings = [
  "DAI",
  "MKR",
  "BAT",
  "USDC",
  "LINK",
  "REP",
  "ZRX",
  "KNC",
  "ZIL",
  "cDAI",
  "TUSD",
  "LOOM",
  "OMG",
  "SUSD",
  "SNX",
  "ENJ",
  "SNT",
  "BNT",
  "GNT",
  "THETA",
  "AE",
  "MANA",
  "ANT",
  "BNB",
  "GRID",
  "WAX",
  "SPANK",
  "QASH",
  "LRC",
  "HT",
  "WTC",
  "MCO",
  "NEXO",
  "ELF",
  "POWR",
  "DENT",
  "ODE",
  "AION",
  "KIN",
  "STORJ",
  "POLY",
  "QNT",
  "DGD",
  "RLC",
  "QKC",
  "SAN",
  "ENG",
  "PAY",
  "COSM",
  "AGI",
  "GOT",
  "FUN",
  "TOMO",
  "CVC",
  "EDO",
  "IOTX",
  "NEC",
  "CTXC",
  "CND",
  "DRGN"
];

async function connect() {
  //connect to mongoose instance
  await mongoose.connect(
    `mongodb://${MONGO_USER}:${MONGO_PASS}@ds231956.mlab.com:31956/movies`,
    { useNewUrlParser: true }
  );
}

async function disconnect() {
  await mongoose.connection.close();
}

/**
 * replaces and persits the existing state with current state
 * @param {*} state
 */
async function saveState(state) {
  try {
    if (await getLatestState()) {
      logger.info("State exists... Lets update it");
      let updated = await State.updateOne({}, state);
      logger.info(updated);
      return updated;
    } else {
      let _state = new State(state);
      let saved = await _state.save();
      logger.info(saved);
      return saved;
    }
  } catch (err) {
    console.error(err.message);
  }
}

/**
 * queries last state from database
 */
async function getLatestState() {
  try {
    let found = await State.find({});
    logger.info(JSON.stringify(found[0]));
    return found[0];
  } catch (err) {
    console.error(err.message);
  }
}

/**
 * queries trades from database
 */
async function getTrades() {
  try {
    let found = await Trades.find({});
    logger.info(JSON.stringify(found[0]));
    return found[0];
  } catch (err) {
    console.error(err.message);
  }
}

async function saveTrade(trade) {
  try {
    if (await getTrades()) {
      logger.info("Trades exists... Lets add trade to it");
      let updated = await Trades.updateOne(
        {},
        {
          $push: { trades: trade },
          lastModifiedOn: new Date(Date.now()).toISOString()
        }
      );
      logger.info(updated);
      return updated;
    } else {
      logger.info("Trades doesn't exists... Lets create it");
      let _trade = [];
      _trade.push(trade);
      let _trades = new Trades({
        trade: [..._trade],
        lastModifiedOn: new Date(Date.now()).toISOString()
      });
      let saved = await _trades.save();
      logger.info(saved);
      return saved;
    }
  } catch (err) {
    console.error(err.message);
  }
}

/****** LISTINGS **********/

async function updateListings(exchange, listings) {
  try {
    if (await getListings(exchange)) {
      logger.info(`Listings exists for ${exchange}... Lets update it`);
      let updated = await Listing.updateOne(
        { exchange },
        {
          $set: { listings: listings },
          lastModifiedOn: new Date(Date.now()).toISOString()
        }
      );
      logger.info(updated);
      return updated;
    } else {
      logger.info(`Listings for ${exchange} doesn\'t exists... Lets add it`);
      let _listings = new Listing({
        exchange,
        listings,
        lastModifiedOn: new Date(Date.now()).toISOString()
      });
      let saved = await _listings.save();
      logger.info(saved);
      return saved;
    }
  } catch (err) {
    console.error(err.message);
  }
}

/**
 * queries listings from database
 */
async function getListings(exchange) {
  try {
    let found = await Listing.find({ exchange });
    logger.info(JSON.stringify(found[0]));
    return found[0];
  } catch (err) {
    console.error(err.message);
  }
}

/****** PAIRS **********/

async function updatePairs(exchanges, pairs) {
  try {
    if (await getPairs(exchanges)) {
      logger.info(`Pairs exists for ${exchanges.join()}... Lets update it`);
      let updated = await Pairs.updateOne(
        { exchanges },
        { $set: { pairs }, lastModifiedOn: new Date(Date.now()).toISOString() }
      );
      logger.info(updated);
      return updated;
    } else {
      logger.info(
        `Pairs for ${exchanges.join()} doesn\'t exists... Lets add it`
      );
      let _pairs = new Pairs({
        exchanges,
        pairs,
        lastModifiedOn: new Date(Date.now()).toISOString()
      });
      let saved = await _pairs.save();
      logger.info(saved);
      return saved;
    }
  } catch (err) {
    console.error(err.message);
  }
}

/**
 * queries listings from database
 */
async function getPairs(exchanges) {
  try {
    let found = await Pairs.find({
      exchanges: exchanges[0],
      exchanges: exchanges[1]
    });
    logger.info(JSON.stringify(found[0]));
    return found[0];
  } catch (err) {
    console.error(err.message);
  }
}
/****************** TESTS ***********************/
async function testPersist() {
  //connect to mongoose instance
  await mongoose.connect(
    `mongodb://${MONGO_USER}:${MONGO_PASS}@ds231956.mlab.com:31956/movies`,
    { useNewUrlParser: true }
  );
  await updateListings("dexag", dexagListings);
  mongoose.connection.close();
}

export {
  connect,
  disconnect,
  updateListings,
  saveTrade,
  saveState,
  getListings,
  getPairs,
  updatePairs
};
//testPersist().catch(err => logger.info(err.message));
