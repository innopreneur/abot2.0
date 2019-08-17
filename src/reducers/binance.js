import { default as types } from '../constants/types';
import { default as _ } from 'lodash';

export default function (state = {}, action) {
    
    switch (action.type) {

        case 'INITIALIZE_STREAMS': 
            return {
                ...state,
                ...action.payload
            }

        case 'INITIALIZE_ORDERBOOK':
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
            
        case 'UPDATE_BUY':
            let { stream: _stream, order: _order, u: _u} = action.payload;
            let ub_updates = {...state[_stream].buy, ..._order};
            let _ub = {};
            _ub[_stream] = {
                ...state[_stream],
                buy: _.omitBy(ub_updates, _.isNumber),
                lastUpdateId: _u
            }
            return {...state, ..._ub}

        case 'UPDATE_SELL':
            let { stream: _stream_, order: _order_, u: _u_} = action.payload;
            let us_updates = {...state[_stream_].sell, ..._order_};
            let _us = {};
            _us[_stream_] = {
                ...state[_stream_],
                sell: _.omitBy(us_updates, _.isNumber),
                lastUpdateId: _u_
            }
            return {...state, ..._us}
                        
        case 'REMOVE_BUY':
            let { stream, order, u} = action.payload;
            let _rb = {};
            _rb[stream] = {
                ...state[stream],
                buy: _.omit(state[stream].buy, Object.keys(order)),
                lastUpdateId: u
            }
            return {...state, ..._rb}
        

        case 'REMOVE_SELL':
                let { stream: _stream__, order: _order__, u: _u__} = action.payload;
                let _rs = {};
                _rs[_stream__] = {
                    ...state[_stream__],
                    sell: _.omit(state[_stream__].sell, Object.keys(_order__)),
                    lastUpdateId: _u__
                }
                return {...state, ..._rs}

        default:
            return state;
    }
}


function updateOrders(orders, order){
  let updatedOrders = orders.map(o => {
        if(o[0] == order[0]){
            return [o[0], order[1]];
        }
        return o;
    })
    return updatedOrders;
}

async function sortOrders(unsortedOrders){
    const sortedOrders = {};
    await Promise.all(Object.keys(unsortedOrders).sort().forEach((key) => {
        sortedOrders[key] = unsortedOrders[key];
    }));
    return sortedOrders;
}