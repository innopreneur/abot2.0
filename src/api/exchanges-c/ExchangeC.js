import Bittrex from "./Bittrex";
import Bilaxy from "./Bilaxy";
import { default as store } from '../../store/index';

let getExchangeC = (exchange) => {
    switch(exchange) {
        case 'BITTREX':
            return new Bittrex(store);
        case 'BILAXY':
            return new Bilaxy(store);
        default: 
            return new Bittrex(store);
    }
}

export default class ExchangeC {
    constructor(exchange){
        this.exchange = getExchangeC(exchange);
    }

     /**
     * get orderbook for a given pair
     * @param {*} pair 
     */
    async getOrderbook(pair){
        return await this.exchange.getOrderbook(pair);
    }


    /**
     * place buy limit order
     */
    async placeBuyLimitOrder(amount, price){
        return await this.exchange.placeBuyLimitOrder(amount, price);
    }

    /**
     * place sell limit order
     */
    async placeSellLimitOrder(amount, price){
        return await this.exchange.placeSellLimitOrder(amount, price);
    }

    /**
     * get account balance
     */
    async getAccountBalance(){
        return await this.exchange.getAccountBalance();
    }

    
    /**
     * format given token and base to pair
     * @param {*} token 
     * @param {*} base 
     */
    formatToPair(token, base){
        return this.exchange.formatToPair(token, base);
    }
}