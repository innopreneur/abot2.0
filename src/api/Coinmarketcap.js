import { default as fetch } from "node-fetch";
import { COINMARKETCAP_KEY } from "babel-dotenv";
import { default as logger } from "../utils/logger";

const BASE_URL = "https://pro-api.coinmarketcap.com/v1"; //cryptocurrency/listings/latest'

export default class CoinMarketCap {
  constructor(store) {
    this.store = store;
  }

  async getCryptoListings() {
    let url = `${BASE_URL}/cryptocurrency/listings/latest?start=1&limit=5000&convert=USD`;
    let response = await fetch(url, {
      headers: { "X-CMC_PRO_API_KEY": COINMARKETCAP_KEY }
    });
    let data = await response.json();
    return data;
  }

  async getTokenAddress(tokenSymbol) {
    logger.info(tokenSymbol);
    let url = `${BASE_URL}/cryptocurrency/info?symbol=${tokenSymbol}`;
    let response = await fetch(url, {
      headers: { "X-CMC_PRO_API_KEY": COINMARKETCAP_KEY }
    });
    let resp = await response.json();
    let { data } = resp;
    return data[tokenSymbol].platform.token_address;
  }
}
