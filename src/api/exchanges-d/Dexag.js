import { default as fetch } from "node-fetch";
const BASE_URL = "https://api.dex.ag"; ///trade?from=ETH&to=DAI&fromAmount=1&dex=best'
import { default as logger } from "../../utils/logger";

export default class DEXAG {
  constructor(store) {
    this.store = store;
  }

  /**
   * get details to perform trades for a given exchange
   * @param {*} from
   * @param {*} to
   * @param {*} toAmount
   * @param {*} fromAmount
   * @param {*} dex
   */
  async getTradeDetails(
    from,
    to,
    toAmount = undefined,
    fromAmount = undefined,
    dex = "best"
  ) {
    let url = null;

    if (toAmount) {
      url = `${BASE_URL}/trade?from=${from}&to=${to}&toAmount=${toAmount}&dex=${dex}`;
    } else if (fromAmount) {
      url = `${BASE_URL}/trade?from=${from}&to=${to}&fromAmount=${fromAmount}&dex=${dex}`;
    }

    let response = await fetch(url);

    try {
      let data = await response.json();
      return data;
    } catch (err) {
      console.error(err.message);
    }
  }

  /**
   * get prices for a given pair from all DEXs
   * @param {*} from
   * @param {*} to
   * @param {*} toAmount
   * @param {*} fromAmount
   * @param {*} dex
   */
  async getPrices(
    from,
    to,
    toAmount = undefined,
    fromAmount = undefined,
    dex = "all"
  ) {
    let url = null;

    if (toAmount) {
      url = `${BASE_URL}/price?from=${from}&to=${to}&toAmount=${toAmount}&dex=${dex}`;
    } else if (fromAmount) {
      url = `${BASE_URL}/price?from=${from}&to=${to}&fromAmount=${fromAmount}&dex=${dex}`;
    }

    let response = await fetch(url);
    let data = await response.json();
    logger.info(JSON.stringify(data));
    return data;
  }
}
