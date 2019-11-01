import { default as fetch } from "node-fetch";
import createDatastreamClient from "@auroradao/datastream-client";
import uwsConnector from "@auroradao/datastream-connector-uws";
import {
  IDEX_API_KEY,
  WAIT_TO_RECONNECT,
  IDEX_ACCOUNT_ADDR,
  IDEX_PRIV_KEY
} from "babel-dotenv";
import { idex } from "../../actions";
import { wait } from "../../utils/helper";
import { default as web3 } from "web3";
import {
  hashPersonalMessage,
  bufferToHex,
  toBuffer,
  ecsign
} from "ethereumjs-util";
import { mapValues } from "lodash";
import { default as logger } from "../../utils/logger";

const { updateOrderbook, setInitialState } = idex;
let BASE_URL = "https://api.idex.market";
const contractAddress = "0x2a0c0dbecc7e4d658f48e01e3fa353f44050c208";

export default class Idex {
  constructor(store, pairs = null) {
    this.store = store;
    this.pairs = pairs;
  }

  setPairs(pairs) {
    this.pairs = pairs;
  }
  //setup datastream client
  initializeClient() {
    return createDatastreamClient(
      {
        log: true,
        key: IDEX_API_KEY,
        connector: uwsConnector,
        stateful: true
      },
      {
        onConnect() {
          // any request may also be used as a promise
          // with a timeout if we need to wait for
          // the result
          this.subscribe(
            "markets",
            ["ETH_AURA", "ETH_IDXM"],
            ["market_orders", "market_cancels", "market_trades"]
          )
            .promise({ timeout: 10000 })
            .then(result => {
              logger.info("Subscribed to markets");
            })
            .catch(err => {
              if (err.message === "TIMEOUT") {
                console.error("Subscribed Timedout");
              } else {
                console.error(err.message);
              }
            });
        },
        onEvent(message) {
          switch (message.event) {
            case "market_trades":
              logger.info(message);
              break;

            case "market_cancels":
              logger.info(JSON.stringify(message.payload.cancels));
              logger.info("---------------");
              break;

            case "market_orders":
              logger.info(JSON.stringify(message.payload.orders));
              logger.info("================");
              break;
          }
        }
      }
    );
  }

  async getOrderbook(pair) {
    let url = `${BASE_URL}/returnOrderBook`;
    let body = { market: pair, count: "10" };
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" }
    });

    let resp = await response.json();
    return resp;
  }

  //get pairs being traded on IDEX
  async getPairs() {
    let url = `${BASE_URL}/returnTicker?api_key=${IDEX_API_KEY}`;
    let response = await fetch(url);
    let resp = await response.json();

    if (resp) {
      let pairs = Object.keys(resp);
      return pairs;
    }
  }

  //set initial state
  async initialState() {
    let pairs = this.pairs || (await this.getPairs());
    //set pairs if not already set
    if (!this.pairs) {
      this.pairs = pairs;
    }

    let initialState = {};
    await Promise.all(
      pairs.map(pair => {
        initialState[pair] = {
          buy: {},
          sell: {}
        };
      })
    );
    this.store.dispatch(setInitialState(initialState));
  }

  async startStreaming() {
    try {
      let pairs = this.pairs || (await this.getPairs());
      await Promise.all(
        pairs.map(async (pair, i) => {
          let _ob = await this.getOrderbook(pair);
          let obFormatted = await this.formatOrderbook(_ob);
          this.store.dispatch(updateOrderbook({ ...obFormatted, pair }));
        })
      );

      //wait for 5 seconds before repeating
      logger.info("Waiting before repeating in startStreaming()....");
      wait(WAIT_TO_RECONNECT);
      this.startStreaming();
    } catch (err) {
      //if connection refused, wait for 10 seconds and try again
      if (err.message.includes("ECONNREFUSED")) {
        wait(WAIT_TO_RECONNECT);
        this.startStreaming();
      }
    }
  }

  async start() {
    //set initial state
    await this.initialState();
    // start streaming
    await this.startStreaming();
  }

  async formatOrderbook(orderbook) {
    //format bids
    let _bids = await Promise.all(orderbook.bids.map(this.formatOrder));
    let _asks = await Promise.all(orderbook.asks.map(this.formatOrder));
    let bids = Object.assign({}, ..._bids);
    let asks = Object.assign({}, ..._asks);
    return { ...orderbook, bids, asks };
  }

  formatOrder(order) {
    let o = {};
    if (Number(order["amount"]) == 0) {
      order["amount"] = 0;
    }
    o[order["price"]] = order["amount"];
    return o;
  }

  /**
   * format pairs to binance standard
   * @param {*} unformattedPairs
   */
  async formatPairs(unformattedPairs) {
    return await Promise.all(
      unformattedPairs.map(pair => {
        return this.formatPair(pair);
      })
    );
  }

  formatPair(unformattedPair) {
    let tokens = unformattedPair.split("_");
    return `${tokens[1].toLowerCase()}${tokens[0].toLowerCase()}`;
  }

  async getIdexContractAddress() {
    try {
      let url = `${BASE_URL}/returnContractAddress`;
      let response = await fetch(url);
      let resp = await response.json();
      return resp.address;
    } catch (error) {
      throw new Error(err.message);
    }
  }

  async getAccountNonce() {
    try {
      let url = `${BASE_URL}/returnNextNonce?address=${IDEX_ACCOUNT_ADDR}`;
      let response = await fetch(url);
      let resp = await response.json();
      return resp.address;
    } catch (error) {
      throw new Error(err.message);
    }
  }

  async placeOrder(tokenBuy, amountBuy, tokenSell, amountSell) {
    let idexContractAddress =
      (await this.getIdexContractAddress()) || contractAddress;

    const wallet = {
      address: IDEX_ACCOUNT_ADDR,
      privateKey: IDEX_PRIV_KEY
    };

    const nonce = await this.getAccountNonce();

    const args = {
      tokenBuy,
      amountBuy,
      tokenSell,
      amountSell,
      address: wallet.address,
      nonce,
      expires: 100000
    };

    const raw = web3.utils.soliditySha3(
      {
        t: "address",
        v: idexContractAddress
      },
      {
        t: "address",
        v: args.tokenBuy
      },
      {
        t: "uint256",
        v: args.amountBuy
      },
      {
        t: "address",
        v: args.tokenSell
      },
      {
        t: "uint256",
        v: args.amountSell
      },
      {
        t: "uint256",
        v: args.expires
      },
      {
        t: "uint256",
        v: args.nonce
      },
      {
        t: "address",
        v: args.address
      }
    );

    const salted = hashPersonalMessage(toBuffer(raw));
    const vrs = mapValues(
      ecsign(salted, toBuffer(wallet.privateKey)),
      (value, key) => (key === "v" ? value : bufferToHex(value))
    );

    logger.info("Order payload:");
    let payload = JSON.stringify(Object.assign(args, vrs), null, 2);
    logger.info(payload);

    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" }
    });

    let resp = await response.json();
    return resp;
  }
}
