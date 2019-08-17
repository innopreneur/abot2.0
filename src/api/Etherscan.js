import { default as fetch } from 'node-fetch';
import { readableBalance } from '../utils/formatter';
import { ETHERSCAN_KEY } from 'babel-dotenv';

const BASE_URL = 'https://api.etherscan.io/api';

export default class Etherscan {
    constructor(store){
        this.store = store;
    }

    async getAccountBalance(tokenAddress, account){
        let url = `${BASE_URL}?module=account&action=tokenbalance&contractaddress=${tokenAddress}&address=${account}&tag=latest&apikey=${ETHERSCAN_KEY}`;
        let response = await fetch(url);
        let data = await response.json()
        return readableBalance(data.result);
    }
}