import Uniswap from "./uniswap/Uniswap";
import { default as store } from '../../store/index';
import DEXAG from "./Dexag";

let getExchangeD = (exchange) => {
    switch(exchange){
        case 'UNISWAP':
            return new Uniswap(store);
        case 'DEXAG':
            return new DEXAG(store);
        default:
            return new Uniswap(store);
    }
}
export default class ExchangeD {
    
    constructor(exchange){
       this.exchange = getExchangeD(exchange);
    }

    async getRate(from, to, amount, fromAddress, toAddress){
        return await this.exchange.getRate(from, to, amount, fromAddress, toAddress);
    }
}