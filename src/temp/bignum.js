import BigNumber from "bignumber.js";
import { mapSeries } from "async";
import { parseAmount, readableBalance } from "../utils/formatter";
import { default as logger } from "../utils/logger";

let fmt = {
  prefix: "",
  decimalSeparator: "",
  groupSeparator: "",
  groupSize: 0,
  secondaryGroupSize: 0,
  fractionGroupSeparator: "",
  fractionGroupSize: 0,
  suffix: ""
};

// Set the global formatting options
//BigNumber.config({ FORMAT: fmt })

async function testBigNum(arr) {
  try {
    let fixed = 0,
      round = 0;
    let decimal = arr.split(".")[1];
    if (decimal) {
      fixed = decimal.length;
    }

    logger.info(`Original - ${arr}`);
    let amount = parseAmount(arr, 2);
    logger.info(`Parse - ${amount}`);
    let balance = readableBalance(amount, 2);
    logger.info(`Readable - ${balance}`);
    logger.info(`------------------------------`);
  } catch (err) {
    logger.info(err);
  }
}

async function start() {
  let nums = [
    "134",
    "14.5424566",
    "0.0005421",
    "123456.234566",
    "12456343344.12945858812",
    "126424322442423554353321332245553535366666.12",
    "3143324363652454353455.3245356363666666566656556565556"
  ];
  await mapSeries(nums, testBigNum);
}

start();
