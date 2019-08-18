import { default as types } from '../constants/types';
import { default as _ } from 'lodash';

export default function (state = {}, action) {
    
    switch (action.type) {

        case types.IDEX.SET_INITIAL_STATE: 
            return {
                ...state,
                ...action.payload
            }

        case types.IDEX.UPDATE_ORDER_BOOK:
            let _uob = {};
            _uob[action.payload.pair] = {
                buy: {...action.payload.bids},
                sell: {...action.payload.asks}
            };

            return {
                ...state, 
                ..._uob
            }
                           
        default:
            return state;
    }
}