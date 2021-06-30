const fetch = require("node-fetch");

var prompt = require('./dataprompt');
//exports.prompt = add;


let apikey = "HZXXNCDRJXWITGCWNM4BTFJYXDAVWMBS"
let ticker = "AAPL"
let baseURL = "https://api.tdameritrade.com/v1/marketdata/chains"
//let params = "HZXXNCDRJXWITGCWNM4BTFJYXDAVWMBS&symbol=AAPL"

let fullURL = baseURL + "?apikey=" + apikey + "&symbol=" + ticker + "&toDate=2021-12-12"

console.log(fullURL)

fetch(fullURL)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    prompt(myJson);
  });