import {default as store} from './store';
import Binance from './api/exchanges-c/Binance';

try {
   
  let binance =  new Binance(store);
  binance.start();
  let unsubscribe = store.subscribe(async () => {
       
        console.log(JSON.stringify(store.getState()))
        console.log('------------------------------')    
  });
  
  
} catch (e) {
    console.log(e);
}


