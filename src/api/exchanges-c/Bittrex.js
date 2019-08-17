import { default as fetch } from 'node-fetch';
import { default as SHA1} from 'sha1';
import { BITTREX_API_KEY, BASE, TOKEN } from 'babel-dotenv';
import { default as urls } from '../../constants/urls';

const BASE_URL = urls.BITTREX;

export default class Bittrex {

    constructor(store){
        this.store = store;
    }
    
    /**
     * get orderbook for a given pair
     * @param {*} pair 
     */
    async getOrderbook(pair){
        let url = `${BASE_URL}/public/getorderbook?market=${pair}&type=both`;
        let response = await fetch(url);
        let resp = await response.json();
        
        if(!resp.success){
            return Error(resp.message);
        }

        let { result } = resp;

        return result;

    }


    /**
     * place buy limit order
     */
    async placeBuyLimitOrder(amount, price){
        let order = this._prepareOrder(amount, price);
        let url = `${BASE_URL}/market/buylimit?${order}`;
        let response = await fetch(url);
        let data = await response.json()
        return data;
    }

    /**
     * place sell limit order
     */
    async placeSellLimitOrder(amount, price){
        let order = this._prepareOrder(amount, price);
        let url = `${BASE_URL}/market/selllimit?${order}`;
        let response = await fetch(url);
        let data = await response.json()
        return data;
    }

    /**
     * get account balance
     */
    async getAccountBalance(){
        let url = `${BASE_URL}/account/getbalance?apikey=${BITTREX_API_KEY}&currency=${BASE}`;
        let response = await fetch(url);
        let resp = await response.json();
        if(!resp.success){
            return Error(`Response not successful.`)
        }
        return resp.result.Balance;
    }


    /**
     * format given token and base to pair
     * @param {*} token 
     * @param {*} base 
     */
    formatToPair(token, base){
        return `${base}-${token}`;
    }

   /**
     * prepare order
     * @param {*} amount 
     * @param {*} price 
     */
    _prepareOrder(amount, price){
        //apikey=API_KEY&market=BTC-LTC&quantity=1.2&rate=1.3
       let params = [
            `apikey=${BITTREX_API_KEY}`,
            `market=${BASE}-${TOKEN}`,
            `quantity=${amount}`,
            `rate=${price}`
            ].join('&');

        return params;
    }


}

