import { BOOK_PERCENT } from 'babel-dotenv';
import Bittrex from '../api/exchanges-c/Bittrex';
import { default as store } from  '../store/index';
import {default as types} from '../constants/types';



function findBetterDeal(priceUniswap, tickerBittrex){
    const {result: {Bid, Ask}} = tickerBittrex;
    
    if(_calculatePercentageProfit(priceUniswap, Bid) >= BOOK_PERCENT){

        //Sell on Bittrex
        //Buy on Uniswap
        console.log(`| Uniswap(${priceUniswap}) - Bittrex(${Bid})| >= ${BOOK_PERCENT}%`);
        console.log('BUY on Uniswap ------ SELL on Bittrex');

        return 

    }
    else if(_calculatePercentageProfit(Ask, priceUniswap) >= BOOK_PERCENT){

        //Sell on Uniswap
        //Buy on Bittrex
        console.log(`| Uniswap(${priceUniswap}) - Bittrex(${Ask})| >= ${BOOK_PERCENT}%`);
        console.log('SELL on Uniswap ------ BUY on Bittrex');

    }
    else {
        console.log(`| Uniswap(${priceUniswap}) - Bittrex SELL (${Bid})| = ${_calculatePercentageProfit(priceUniswap, Bid)} <= ${BOOK_PERCENT}%`);
        console.log(`| Uniswap(${priceUniswap}) - Bittrex BUY (${Ask})| = ${_calculatePercentageProfit(Ask, priceUniswap)} <= ${BOOK_PERCENT}%`);

    }
}

/**
 * calculate SELL on UNISWAP and BUY on BITTREX Profitability
 * @param {*} priceUniswap 
 * @param {*} priceBittrex 
 */
function calculateSellBuyProfitability(priceUniswap, priceBittrex){
    //const {Quantity, Rate} = priceBittrex;
    let _bittrex = priceBittrex //Quantity * Rate;
    if(_calculatePercentageProfit(_bittrex, priceUniswap) >= BOOK_PERCENT){

        //Sell on Uniswap
        //Buy on Bittrex
        console.log(`| Uniswap(${priceUniswap}) - Bittrex(${_bittrex})| >= ${BOOK_PERCENT}%`);
        console.log('SELL on Uniswap ------ BUY on Bittrex');

        return 

    }
    
    else {
        console.log(`| Uniswap SELL (${priceUniswap}) - Bittrex BUY (${_bittrex})| = ${_calculatePercentageProfit(_bittrex, priceUniswap)} <= ${BOOK_PERCENT}%`);
    }
}

/**
 * calculate BUY on UNISWAP and SELL on BITTREX Profitability
 * @param {*} priceUniswap 
 * @param {*} priceBittrex 
 */
function calculateBuySellProfitability(priceUniswap, priceBittrex){
    //const {Quantity, Rate} = priceBittrex;
    let _bittrex = priceBittrex //Quantity * Rate;
    if(_calculatePercentageProfit(priceUniswap, _bittrex) >= BOOK_PERCENT){

        //Sell on Bittrex
        //Buy on Uniswap
        console.log(`| Bittrex SELL (${_bittrex}) - Uniswap BUY (${priceUniswap}) | >= ${BOOK_PERCENT}%`);
        console.log('BUY on Uniswap ------ SELL on Bittrex');

        return 

    }
    
    else {
        console.log(`| Uniswap(${priceUniswap}) - Bittrex SELL (${_bittrex})| = ${_calculatePercentageProfit(priceUniswap, _bittrex)} <= ${BOOK_PERCENT}%`);
    }
}

/**
 * calculate profit percentage based on cost and sold amounts
 * @param {} cost 
 * @param {*} sold 
 */
function _calculatePercentageProfit(cost, sold){
    return ((sold - cost)/cost) * 100;
}

function calculateExpenses(exchange, currency = null, type = null, tokenAmount = 0){
    switch(exchange){
        case 'uniswap':
            if(type == types.ETH_BASE_TRADE){
                return tokenAmount * 0.003;
            }
            else if(type == types.ERC20_BASE_TRADE){
                return tokenAmount * 0.00591;
            }
            return;
        case 'bittrex':
            let bittrex = new Bittrex(store);
            return 2 * bittrex.getTxFee(currency); //1 tx + 1 withdrawal
    }
}


module.exports = {
    findBetterDeal,
    calculateSellBuyProfitability,
    calculateBuySellProfitability
}