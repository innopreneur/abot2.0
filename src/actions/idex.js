import { default as types } from '../constants/types';

export function updateOrderbook(orderbook){
    return {
        type: types.IDEX.UPDATE_ORDER_BOOK,
        payload: orderbook
    }
}

export function setInitialState(initialState){
    return {
        type: types.IDEX.SET_INITIAL_STATE,
        payload: initialState
    }
}
