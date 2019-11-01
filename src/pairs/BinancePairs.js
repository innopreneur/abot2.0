import { default as fetch } from "node-fetch";
import { default as logger } from "../utils/logger";

let BASE_URL = "https://www.binance.com/api/v1";

async function getPairs() {
  let url = `${BASE_URL}/ticker/24hr`;
  let response = await fetch(url);
  let resp = await response.json();

  if (resp.length > 1) {
    let pairs = await Promise.all(resp.map(i => i.symbol.toLowerCase()));
    logger.info(pairs);
  }
}
getPairs();
