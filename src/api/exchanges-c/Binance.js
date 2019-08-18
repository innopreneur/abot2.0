import { default as WebSocket} from 'ws';
import { default as fetch } from 'node-fetch';
import { WAIT_TO_RECONNECT } from 'babel-dotenv';
import { binance } from '../../actions';
import { wait } from '../../utils/helper';

const { updateBuyOrder, updateSellOrder, initializeOrderbook, initializeStreams } = binance;


let BASE_URL = 'https://www.binance.com/api/v1';

export default class Binance {

    constructor(store) {
        this.store = store;
        this.initiated = false;
    }

    async start(){
        try {
        let pairs = await this.getPairs();
        //scan for ETH only pairs
        let ethOnlyPairs = await Promise.all(pairs.filter(pair => pair.includes('eth')));
        console.log(ethOnlyPairs)
        let streams = '';
        //join pairs to streaming url
        await Promise.all(ethOnlyPairs.map((pair, i) => {
            if(i == ethOnlyPairs.length - 1){
                streams += `${pair}@depth`
            }
            else {
                streams += `${pair}@depth/`
            }
            
        }));
        //ethOnlyPairs = ['ethbtc']//TODO
        //streams= 'ethbtc@depth'
        //set it to instance variable
        this.pairs = ethOnlyPairs.slice();
        this.wss = new WebSocket(`wss://stream.binance.com:9443/ws/${streams}`);
        await this.initializeStreams(ethOnlyPairs);
        await this.initialSetup(ethOnlyPairs);
        this.subscribeToEvents(); 
     } catch(err){
         throw new Error(err.message);
     }
    }

    async initialSetup(pairs){
        await Promise.all(pairs.map(async (pair) => {
            let _ob = await this.getOrderbook(pair.toUpperCase());
            let ob = await this.formatOrderbook(_ob);
            this.store.dispatch(initializeOrderbook({...ob, stream: pair}));
        }))
        //console.log(orderbook);
        return;
    }

    async getOrderbook(symbol){
        try{
            let url = `${BASE_URL}/depth?symbol=${symbol}&limit=10`;
            let response = await fetch(url);
            let resp = await response.json();
            return resp;
        } catch(err){
            //if connection refused, wait for 10 seconds and try again
            if(err.message.includes('ECONNREFUSED')){
                wait(WAIT_TO_RECONNECT);
                this.startStreaming();
            }
        }
    }

    subscribeToEvents(){
      this.wss.on('message', this.processStreams.bind(this));
    }

    async getPairs(){
        let url = `${BASE_URL}/ticker/24hr`;
        let response = await fetch(url);
        let resp = await response.json();
    
        if(resp.length > 1){
            let pairs = await Promise.all(resp.map(i => i.symbol.toLowerCase()));
            return pairs;
        }
    }

    async processStreams(data){
        const {s: _stream, U, u, b, a} = JSON.parse(data);
        let stream = _stream.toLowerCase();
        let state = this.store.getState()['binance'][stream];

        //drop any event where u is <= lastUpdateId
        if(u > state.lastUpdateId){

            if((this.initiated && U == state.lastUpdateId + 1)
            || (!this.initiated && U <= state.lastUpdateId + 1)){

                //set the flag to 'not first process'
                this.initiated =  true;
                //check if there are any bids
                if(b.length >= 1){
                    let _orders = await Promise.all(b.map(this.formatOrder));
                    let order = Object.assign({}, ..._orders);
                    console.log(`UPDATE BUY - ${stream}-${u}-${JSON.stringify(order)}`)
                    this.store.dispatch(updateBuyOrder({stream, u, order}));
                }

                //check if there are any asks
                if(a.length >= 1){
                    let _orders = await Promise.all(a.map(this.formatOrder));
                    let order = Object.assign({}, ..._orders);
                    console.log(`UPDATE SELL - ${stream}-${u}-${JSON.stringify(order)}`)
                    this.store.dispatch(updateSellOrder({stream, u, order}));
                }
            }
        }
        else {
            //start once again
            this.initialSetup(this.pairs);
        }
    
    }

    async initializeStreams(pairs){
        let streams = {};
        await Promise.all(pairs.map(pair => {
            streams[pair] = {
                lastUpdateId: 0,
                buy: {},
                sell: {}
            }
        }));
        this.store.dispatch(initializeStreams(streams));
    }

    async formatOrderbook(orderbook){
        //format bids
        let _bids = await Promise.all(orderbook.bids.map(this.formatOrder));
        let _asks = await Promise.all(orderbook.asks.map(this.formatOrder));
        let bids = Object.assign({}, ..._bids);
        let asks = Object.assign({}, ..._asks);
        return {...orderbook, bids, asks};
    }

    formatOrder(order){
        let o = {};
        if(Number(order[1]) == 0){
            order[1] = 0;
        }
        o[order[0]] = order[1];
        return o;
    }
}