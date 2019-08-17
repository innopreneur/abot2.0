import { default as mongoose } from 'mongoose';


let TokenSchema = new mongoose.Schema(
    {
        symbol: String,
        balance: Number
    }
)


let BalanceSchema = new mongoose.Schema(
    {
        account: String,
        type: String,
        tokens: [TokenSchema]
    }
)


let TradeSchema = new mongoose.Schema(
    {
        quantity: Number,
        token: String,
        buy: {
            exchange: String,
            pair: String,
            cost: Number,
            txId: String
        },
        sell: {
            exchange: String,
            pair: String,
            cost: Number,
            txId: String
        },
        profit: Number,
        profitPercent: Number,
        result: String,
        tradedOn: String
    }
)

let TradesSchema = new mongoose.Schema(
    {
        trades : [TradeSchema],
        lastModifiedOn: String
    }
)

let StateSchema = new mongoose.Schema(
    {
        balances: [BalanceSchema],
        dailyTrades: {
            total: Number,
            success: Number,
            failure: Number,
            missed: Number
        },
        lastModifiedOn: String  
    }
)

let ListingSchema = new mongoose.Schema(
    {
        exchange: String,
        listings: Array,
        lastModifiedOn: String  
    }
)

let PairsSchema = new mongoose.Schema(
    {
        exchanges: [String],
        pairs: [String],
        lastModifiedOn: String  
    }
)

let Listing = mongoose.model('Listing', ListingSchema);
let State = mongoose.model('State', StateSchema);
let Trades = mongoose.model('Trades', TradesSchema);
let Pairs = mongoose.model('Pairs', PairsSchema);

module.exports = { State, Trades, Listing, Pairs };