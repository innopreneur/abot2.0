import {default as store} from './store';
import Binance from './api/exchanges-c/Binance';
import Idex from './api/exchanges-d/Idex';

try {
   
  let binance =  new Binance(store);
  binance.start();
  let unsubscribe = store.subscribe(async () => {
       
        console.log(JSON.stringify(store.getState()))
        console.log('*****************************************************')    
  });

  let idex = new Idex(store);
  idex.start();


} catch (e) {
    console.log(e);
}


