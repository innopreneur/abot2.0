import { default as fetch } from 'node-fetch';
import createDatastreamClient from '@auroradao/datastream-client';
import uwsConnector from '@auroradao/datastream-connector-uws';
import { IDEX_API_KEY, WAIT_TO_RECONNECT } from 'babel-dotenv';
import { idex } from '../../actions';
import { wait } from '../../utils/helper';

const { updateOrderbook, setInitialState } = idex;
let BASE_URL = 'https://api.idex.market';

export default class Idex {

    constructor(store){
        this.store = store;
        //this.client = this.initializeClient();
    }

    //setup datastream client
    initializeClient(){
        return createDatastreamClient({
            log: true,
            key: IDEX_API_KEY,
            connector: uwsConnector,
            stateful: true
          },
          {
            onConnect() {
              // any request may also be used as a promise
              // with a timeout if we need to wait for
              // the result
              this.subscribe(
                  'markets',
                  ['ETH_AURA', 'ETH_IDXM'],
                  ['market_orders', 'market_cancels', 'market_trades']
                )
                .promise({ timeout: 10000 })
                .then(result => {
                  console.log("Subscribed to markets")
                })
                .catch(err => {
                  if (err.message === 'TIMEOUT') {
                    console.error("Subscribed Timedout")
                  } else {
                    console.error(err.message);
                  }
                });
            },
            onEvent(message) {
              switch (message.event) {

                case 'market_trades':
                    console.log(message);
                    break;

                case 'market_cancels': 
                    console.log(JSON.stringify(message.payload.cancels));
                    console.log('---------------')
                    break;
                
                case 'market_orders': 
                    console.log(JSON.stringify(message.payload.orders));
                    console.log('================')
                    break;
                
              }
            },
          });
    }

    async getOrderbook(pair){
        let url = `${BASE_URL}/returnOrderBook`;
        let body = {'market': pair, 'count': '10'}
        let response = await fetch(
            url, 
            { 
                method: 'POST', 
                body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' } 
            });

        let resp = await response.json();
        return resp;
      
    }

    //get pairs being traded on IDEX
    async getPairs(){
        let url = `${BASE_URL}/returnTicker`;
        let response = await fetch(url);
        let resp = await response.json();
    
        if(resp){
            let pairs = Object.keys(resp);
            this.pairs = pairs;
            return pairs;
        }
    }

    //set initial state
    async initialState(){
        let pairs = await this.getPairs();
        let initialState = {};
        await Promise.all(pairs.map(pair => {
            initialState[pair] = {
                buy: {},
                sell: {}
            }
        }));
        this.store.dispatch(setInitialState(initialState));
    }

    async startStreaming(){
        try {
            let pairs = this.pairs || await this.getPairs();
            await Promise.all(pairs.map(async (pair, i) => {
                let _ob =  await this.getOrderbook(pair)
                let obFormatted = await this.formatOrderbook(_ob);
                this.store.dispatch(updateOrderbook({...obFormatted, pair}));
            }));

            //wait for 5 seconds before repeating
            console.log('Waiting before repeating....')
            wait(WAIT_TO_RECONNECT);
            this.startStreaming();

        } catch(err){
            //if connection refused, wait for 10 seconds and try again
            if(err.message.includes('ECONNREFUSED')){
                wait(WAIT_TO_RECONNECT);
                this.startStreaming();
            }
        }
        
    }

    async start(){
        //set initial state
        await this.initialState();
        // start streaming
        await this.startStreaming();
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
        if(Number(order['amount']) == 0){
            order['amount'] = 0;
        }
        o[order['price']] = order['amount'];
        return o;
    }
}







