export default {
    state: {
        balances: [
            {
                account: '',
                type: 'UNISWAP',
                tokens: [
                    {
                        symbol: 'ETH',
                        balance: 0.04
                    },
                    {
                        symbol: 'OCEAN',
                        balance: 13455.2
                    }
                ]
            
            },
            {
                account: '',
                type: 'BITTREX',
                tokens: [
                    {
                        symbol: 'ETH',
                        balance: 1.4
                    },
                    {
                        symbol: 'OCEAN',
                        balance: 10000
                    }
                ]
            
            }
    
        ],
        dailyTrades: {
            total: 10,
            success: 7,
            failure: 1,
            missed: 2
        },
        lastModifiedOn: new Date(Date.now()).toISOString()
    },
    trades : [
        {
            quantity: 10000,
            token: 'OCEAN',
            buy: {
                exchange: 'UNISWAP',
                pair: 'ETH-OCEAN',
                cost: 1.3,
                txId: ''
            },
            sell: {
                exchange: 'BITTREX',
                pair: 'ETH-OCEAN',
                cost: 1.5,
                txId: ''
            },
            profit: 0.2,
            profitPercent: 13,
            result: 'success',
            tradedOn: new Date(Date.now()).toISOString()
        }
    ]
}


