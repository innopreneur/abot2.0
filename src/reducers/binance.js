import { default as types } from '../constants/types';
import { default as _ } from 'lodash';

export default function (state = {}, action) {
    
    switch (action.type) {

        case types.BINANCE.INITIALIZE_STREAMS: 
            return {
                ...state,
                ...action.payload
            }

        case types.BINANCE.INITIALIZE_ORDERBOOK:
            let _io = {};
            _io[action.payload.stream] = {
                lastUpdateId: action.payload.lastUpdateId,
                buy: action.payload.bids,
                sell: action.payload.asks
            };

            return {
                ...state, 
                ..._io
            };
            
        case types.BINANCE.UPDATE_BUY:
            let { stream: _stream, order: _order, u: _u} = action.payload;
            let ub_updates = {...state[_stream].buy, ..._order};
            let _ub = {};
            _ub[_stream] = {
                ...state[_stream],
                buy: _.omitBy(ub_updates, _.isNumber),
                lastUpdateId: _u
            }
            return {...state, ..._ub}

        case types.BINANCE.UPDATE_SELL:
            let { stream: _stream_, order: _order_, u: _u_} = action.payload;
            let us_updates = {...state[_stream_].sell, ..._order_};
            let _us = {};
            _us[_stream_] = {
                ...state[_stream_],
                sell: _.omitBy(us_updates, _.isNumber),
                lastUpdateId: _u_
            }
            return {...state, ..._us}                   
        default:
            return state;
    }
}


async function sortOrders(unsortedOrders){
    const sortedOrders = {};
    await Promise.all(Object.keys(unsortedOrders).sort().forEach((key) => {
        sortedOrders[key] = unsortedOrders[key];
    }));
    return sortedOrders;
}