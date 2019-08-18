import {default as store} from './store';
import Binance from './api/exchanges-c/Binance';
import Idex from './api/exchanges-d/Idex';
import { default as _ } from 'lodash';

try {
   
  let binance =  new Binance(store);
  
  let unsubscribe = store.subscribe(async () => {
       
        console.log(JSON.stringify(store.getState()))
        console.log('*****************************************************')    
  });

  let idex = new Idex(store);
  //find common pairs
  let commonPairs = matchPairs(binance, idex);
  //set pairs to track
  binance.setPairs(commonPairs);
  idex.setPairs(commonPairs);
  binance.start();
  idex.start();


} catch (e) {
    console.log(e);
}


async function matchPairs(binance, idex){
  let bPairs = await binance.getPairs();
  let iPairs = await idex.getPairs();
  //transform idex pairs to match binance pair format
  let formattedPairs = await idex.formatPairs(iPairs);
  let commonPairs = _.intersection(bPairs, formattedPairs);
  console.log(commonPairs.length);
  return commonPairs;
}
