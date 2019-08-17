import { default as types } from '../constants/types';

export function removeBuyOrder(order){
    return {
        type: types.BINANCE.REMOVE_BUY,
        payload: order
    }
}

export function updateBuyOrder(order){
    return {
        type: types.BINANCE.UPDATE_BUY,
        payload: order
    }
}

export function removeSellOrder(order){
    return {
        type: types.BINANCE.REMOVE_SELL,
        payload: order
    }
}

export function updateSellOrder(order){
    return {
        type: types.BINANCE.UPDATE_SELL,
        payload: order
    }
}

export function initializeOrderbook(orderbook){
    return {
        type: types.BINANCE.INITIALIZE_ORDERBOOK,
        payload: orderbook
    }
}


export function initializeStreams(streams){
    return {
        type: types.BINANCE.INITIALIZE_STREAMS,
        payload: streams
    }
}