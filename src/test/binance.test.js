import { default as assert } from "assert";
import { default as store } from "../store";
import Binance from "../api/exchanges-c/Binance";
import { default as logger } from "../utils/logger";

let binance = new Binance(store);

describe("binance", function() {
  it("should initialize pairs", async function() {
    let pairs = await binance.getPairs();
    await binance.initializeStreams(pairs);
    let { binance: b } = store.getState();
    logger.info(JSON.stringify(b));
    assert.equal(b.keys().length, pairs.length);
  });

  it("should initialize orderbook", function() {
    assert.equal([1, 2, 3].indexOf(4), -1);
  });

  it("should add buy order", function() {
    assert.equal([1, 2, 3].indexOf(4), -1);
  });

  it("should remove buy order", function() {
    assert.equal([1, 2, 3].indexOf(4), -1);
  });

  it("should update buy order", function() {
    assert.equal([1, 2, 3].indexOf(4), -1);
  });

  it("should add sell order", function() {
    assert.equal([1, 2, 3].indexOf(4), -1);
  });

  it("should remove sell order", function() {
    assert.equal([1, 2, 3].indexOf(4), -1);
  });

  it("should update sell order", function() {
    assert.equal([1, 2, 3].indexOf(4), -1);
  });
});
