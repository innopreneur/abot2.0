import { default as fetch } from 'node-fetch';
import { BILAXY_API_KEY, BILAXY_SECRET, BASE, TOKEN } from 'babel-dotenv';
import { default as urls } from '../../constants/urls';

const BASE_URL = urls.BILAXY;

export default class Bilaxy {

    constructor(store){
        this.store = store;
    }
    
    /**
     * get orderbook for a given pair
     * @param {*} pair 
     */
    async getOrderbook(pair){
        let url = `${BASE_URL}/depth?symbol=${pair}`;
        let response = await fetch(url);
        let resp = await response.json();

        if(resp.code != '200'){
            return Error(JSON.stringify(resp))
        }

        let { bids: buy, asks: sell } = resp.data;
        return {buy, sell};
    }


    /**
     * place buy limit order
     */
    async placeBuyLimitOrder(amount, price){
        let order = this._prepareOrder(amount, price);
        let url = `${BASE_URL}/market/buylimit?${order}`;
        let response = await fetch(url);
        let data = await response.json()
        return data;
    }

    /**
     * place sell limit order
     */
    async placeSellLimitOrder(amount, price){
        let order = this._prepareOrder(amount, price);
        let url = `${BASE_URL}/market/selllimit?${order}`;
        let response = await fetch(url);
        let data = await response.json()
        return data;
    }

    /**
     * get account balance
     */
    async getAccountBalance(){

        let signParams = [
            `key=${BILAXY_API_KEY}`,
            `secret=${BILAXY_SECRET}`
           ].join('&');

            //generate signature
        let signature = SHA1(signParams);

        let params = [
                `key=${BILAXY_API_KEY}`,
                `sign=${signature}`,
                ].join('&');

        let url = `${BASE_URL}/v1/balances?${params}`;
        let response = await fetch(url);
        let result = await response.json()
        
        if(!result.code == 200){
            return Error(`Response code : ${result.code}`);
        }

        let account = result.data.find(item => item.name == BASE);
        return account.balance;
    }

    /**
     * format given token and base to pair
     * @param {*} token 
     * @param {*} base 
     */
    formatToPair(token, base){
       let pair = PAIRS.find(item => item.pair == `${token}/${base}`);
       if(!pair){
           return Error(`${token}/${base} PAIR not found in Bilaxy`);
       }
       return pair.id;
    }

    
     /**
     * prepare order
     * @param {*} amount 
     * @param {*} price 
     */
    _prepareOrder(amount, price, type = null){
        
        let signParams = [
             `amount=${amount}`,
             `key=${BILAXY_API_KEY}`,
             `price=${price}`,
             `secret=${BILAXY_SECRET}`,
             `symbol=${this.formatToPair(TOKEN, BASE)}`
             `type=${type}`
            ].join('&');
  
         //generate signature
         let signature = SHA1(signParams);
 
         let params = [
                 `amount=${amount}`,
                 `key=${BILAXY_API_KEY}`,
                 `price=${price}`,
                 `sign=${signature}`,
                 `symbol=${this.formatToPair(TOKEN, BASE)}`,
                 `type=${type}`,
                 ].join('&');
 
         return params;
     }


}

const PAIRS = [
    {pair: 'EOS/ETH', id: 16},
 {pair: 'ETH/BTC', id: 15},
 {pair: 'ETH/USDT', id: 79},
 {pair: 'BIA/ETH', id: 165},
 {pair: 'BIA/BTC', id: 166},
 {pair: 'BIA/USDT', id: 167},
 {pair: 'BIA/BNB', id: 217},
 {pair: 'RDN/ETH', id: 17},
 {pair: 'ZRX/ETH', id: 19},
 {pair: 'ZRX/USDT', id: 150},
 {pair: 'BTC/USDT', id: 113},
 {pair: 'HOT/ETH', id: 21},
 {pair: 'CVT/ETH', id: 22},
 {pair: 'GET/ETH', id: 23},
 {pair: 'LND/ETH', id: 24},
 {pair: 'SS/ETH', id: 25},
 {pair: 'BZNT/ETH', id: 26},
 {pair: 'TAU/ETH', id: 27},
 {pair: 'SKM/ETH', id: 29},
 {pair: 'LBA/ETH', id: 30},
 {pair: 'ELI/ETH', id: 31},
 {pair: 'HER/ETH', id: 34},
 {pair: 'UBT/ETH', id: 37},
 {pair: 'IOTX/ETH', id: 39},
 {pair: 'HOLD/ETH', id: 40},
 {pair: 'VNT/ETH', id: 41},
 {pair: 'ALI/ETH', id: 43},
 {pair: 'VITE/ETH', id: 44},
 {pair: 'EDR/ETH', id: 45},
 {pair: 'NKN/ETH', id: 46},
 {pair: 'SOUL/ETH', id: 47},
 {pair: 'Seele/ETH', id: 48},
 {pair: 'NRVE/ETH', id: 49},
 {pair: 'PI/ETH', id: 50},
 {pair: 'BQT/ETH', id: 51},
 {pair: 'MT/ETH', id: 53},
 {pair: 'LEMO/ETH', id: 54},
 {pair: 'ABYSS/ETH', id: 55},
 {pair: 'QKC/ETH', id: 56},
 {pair: 'XPX/ETH', id: 57},
 {pair: 'MVP/ETH', id: 58},
 {pair: 'ATMI/ETH', id: 59},
 {pair: 'GO/ETH', id: 61},
 {pair: 'RMESH/ETH', id: 62},
 {pair: 'UPP/ETH', id: 63},
 {pair: 'YEED/ETH', id: 64},
 {pair: 'FTM/ETH', id: 65},
 {pair: 'OLT/ETH', id: 66},
 {pair: 'DAG/ETH', id: 67},
 {pair: 'MET/ETH', id: 68},
 {pair: 'EGT/ETH', id: 69},
 {pair: 'KNT/ETH', id: 70},
 {pair: 'ZCN/ETH', id: 71},
 {pair: 'ZXC/ETH', id: 72},
 {pair: 'CARD/ETH', id: 73},
 {pair: 'MFT/ETH', id: 74},
 {pair: 'GOT/ETH', id: 75},
 {pair: 'AION/ETH', id: 76},
 {pair: 'ESS/ETH', id: 77},
 {pair: 'ZP/ETH', id: 78},
 {pair: 'RHOC/ETH', id: 82},
 {pair: 'SPRK/ETH', id: 83},
 {pair: 'SDS/ETH', id: 84},
 {pair: 'ABL/ETH', id: 86},
 {pair: 'DX/ETH', id: 90},
 {pair: 'USE/ETH', id: 92},
 {pair: 'FOAM/ETH', id: 93},
 {pair: 'DAV/ETH', id: 95},
 {pair: 'UBEX/ETH', id: 97},
 {pair: 'UCN/ETH', id: 98},
 {pair: 'ASA/ETH', id: 99},
 {pair: 'EDN/ETH', id: 100},
 {pair: 'DEC/ETH', id: 103},
 {pair: 'TOL/ETH', id: 107},
 {pair: 'NRP/ETH', id: 108},
 {pair: 'HUM/ETH', id: 109},
 {pair: 'LQD/ETH', id: 110},
 {pair: 'HQT/ETH', id: 111},
 {pair: 'PTN/ETH', id: 112},
 {pair: 'PTON/ETH', id: 114},
 {pair: 'TRTL/BTC', id: 117},
 {pair: 'XPX/BTC', id: 118},
 {pair: 'ZP/BTC', id: 119},
 {pair: 'GO/BTC', id: 120},
 {pair: 'AION/BTC', id: 121},
 {pair: 'MICRO/ETH', id: 124},
 {pair: 'eQUAD/ETH', id: 127},
 {pair: 'TRTL/ETH', id: 128},
 {pair: 'LOOM/ETH', id: 129},
 {pair: 'MXC/ETH', id: 130},
 {pair: 'SPND/ETH', id: 134},
 {pair: 'AERGO/ETH', id: 136},
 {pair: 'LAMB/ETH', id: 137},
 {pair: 'WBT/ETH', id: 138},
 {pair: 'COVA/ETH', id: 139},
 {pair: 'LTO/ETH', id: 142},
 {pair: 'CPT/ETH', id: 145},
 {pair: 'WMK/ETH', id: 147},
 {pair: 'EMB/ETH', id: 148},
 {pair: 'HOT/USDT', id: 149},
 {pair: 'TT/USDT', id: 151},
 {pair: 'TT/ETH', id: 152},
 {pair: 'SHK/ETH', id: 153},
 {pair: 'ANKR/ETH', id: 154},
 {pair: 'CELR/ETH', id: 155},
 {pair: 'KICK/ETH', id: 156},
 {pair: 'KICK/BTC', id: 157},
 {pair: 'KICK/USDT', id: 158},
 {pair: 'PLG/ETH', id: 159},
 {pair: 'BOLT/ETH', id: 160},
 {pair: 'DREP/ETH', id: 161},
 {pair: 'ORBS/ETH', id: 163},
 {pair: 'COS/ETH', id: 164},
 {pair: 'ORBS/BTC', id: 168},
 {pair: 'IGNIS/ETH', id: 169},
 {pair: 'IGNIS/BTC', id: 170},
 {pair: 'ARDR/ETH', id: 171},
 {pair: 'ARDR/BTC', id: 172},
 {pair: 'LIT/ETH', id: 173},
 {pair: 'NNB/ETH', id: 174},
 {pair: 'CNNS/ETH', id: 175},
 {pair: 'SFT/ETH', id: 176},
 {pair: 'MATIC/ETH', id: 179},
 {pair: 'OCEAN/ETH', id: 180},
 {pair: 'DUO/ETH', id: 181},
 {pair: 'DOS/ETH', id: 182},
 {pair: 'OCEAN/USDT', id: 183},
 {pair: 'XPX/USDT', id: 184},
 {pair: 'NXT/ETH', id: 185},
 {pair: 'NXT/BTC', id: 186},
 {pair: 'ALV/ETH', id: 187},
 {pair: 'MIX/ETH', id: 188},
 {pair: 'SKT/ETH', id: 189},
 {pair: 'TRY/ETH', id: 190},
 {pair: 'CRE/ETH', id: 191},
 {pair: 'CRE/BTC', id: 192},
 {pair: 'GMAT/ETH', id: 194},
 {pair: 'RSR/ETH', id: 195},
 {pair: 'VDX/ETH', id: 196},
 {pair: 'BNB/USDT', id: 197},
 {pair: 'ONE/ETH', id: 198},
 {pair: 'ONE/USDT', id: 199},
 {pair: 'CHR/ETH', id: 200},
 {pair: 'OGO/ETH', id: 201},
 {pair: 'DAPPT/ETH', id: 203},
 {pair: 'BQQQ/ETH', id: 204},
 {pair: 'STPT/ETH', id: 205},
 {pair: 'SMT/ETH', id: 206},
 {pair: 'MITC/ETH', id: 207},
 {pair: 'RAVEN/ETH', id: 208},
 {pair: 'JAR/ETH', id: 209},
 {pair: 'ALGO/ETH', id: 210},
 {pair: 'ALGO/USDT', id: 211},
 {pair: 'LNX/ETH', id: 212},
 {pair: 'PBL/ETH', id: 213},
 {pair: 'CHZ/ETH', id: 214},
 {pair: 'AMPL/ETH', id: 215},
 {pair: 'PROM/ETH', id: 216},
 {pair: 'CHZ-B/BNB', id: 218},
 {pair: 'ERD/ETH', id: 219},
 {pair: 'ERD/BNB', id: 220},
 {pair: 'OGO/USDT', id: 221},
 {pair: 'VIDY/ETH', id: 222},
 {pair: 'SQR/ETH', id: 223},
 {pair: 'ZUC/ETH', id: 224},
 {pair: 'ECO/ETH', id: 225},
 {pair: 'URAC/ETH', id: 226},
 {pair: 'URAC/USDT', id: 227},
 {pair: 'RUNE/BNB', id: 228},
 {pair: 'BNB/ETH', id: 229},
 {pair: 'CBIX/ETH', id: 230},
 {pair: 'CBIX/BNB', id: 231},
 {pair: 'DEEP/ETH', id: 232},
]