import { combineReducers } from 'redux'
import { default as binance } from './binance';
import { default as idex} from './idex';

export default combineReducers({ binance, idex });