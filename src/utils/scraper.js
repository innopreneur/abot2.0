//function to retrieve list of companies for given industry
//import { default as fetch } from 'node-fetch';
import { default as cheerio} from 'cheerio';
import { default as request } from 'request';
import { default as rp } from 'request-promise';
import { mapSeries} from 'async';
import { default as uniswap } from '../temp/uniswap';



async function uniswapDecimals(){
    await mapSeries(uniswap, getDecimals);
}

async function getDecimals(token) {

    let html = await rp({
    url: 'https://etherscan.io/token/' + token.address,
    method: 'get',
    timeout: 600000
        })


    //load html contents in jquery selector via cheerio;
    let $ = cheerio.load(html);
    //console.log('outside Fmovies for movie - ' + movieName);


    let row = $('#ContentPlaceHolder1_trDecimals > div')
    let decimals = row.text().split(':')[1].trim() //replace(/\s/g,''); 
    token.decimals = Number(decimals);
    console.log(token);
    return token;

}


uniswapDecimals();
