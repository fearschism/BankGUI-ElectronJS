//------Coins---------------------
let saadCoin = {
    name:"saadCoin",
    symbol:"SCC",
    Pprice:null,
    price:5000,
    net_change:0.00,
    percent_net_change:0.00
}
let pi = {
    name:"piCoin",
    symbol:"PI",
    Pprice:null,
    price:314,
    net_change:0.00,
    percent_net_change:0.00
}
let byte = {
    name:"byteCoin",
    symbol:"BTC",
    Pprice:null,
    price:38500,
    net_change:0.00,
    percent_net_change:0.00
}
let tobi = {
    name:"tobiCoin",
    symbol:"TBC",
    Pprice:null,
    price:44,
    net_change:0.00,
    percent_net_change:0.00
}
let hash = {
    name:"hashBrown",
    symbol:"HBW",
    Pprice:null,
    price:3300,
    net_change:0.00,
    percent_net_change:0.00
}
//--------------Stocks-------------------------
let GMR = {
    name:"GMR",
    symbol:"GM",
    Pprice:null,
    price:550,
    net_change:0.00,
    percent_net_change:0.00
}
let muv = {
    name:"muve",
    symbol:"MVI",
    Pprice:null,
    price:5,
    net_change:0.00,
    percent_net_change:0.00
}
let blk = {
    name:"blkBucks",
    symbol:"BUX",
    Pprice:null,
    price:112,
    net_change:0.00,
    percent_net_change:0.00
}
let zait = {
    name:"zaitco",
    symbol:"ZCO",
    Pprice:null,
    price:32,
    net_change:0.00,
    percent_net_change:0.00
    
}
let gst = {
    name:"gst",
    symbol:"gst",
    Pprice:null,
    price:1,
    net_change:0.00,
    percent_net_change:0.00
}
const ArrC = [saadCoin,pi,byte,tobi,hash] // coin array to be added to localstorage,
const ArrS = [GMR,muv,blk,zait,gst] // STOCKS ARRAY


if(localStorage.getItem('coins') == null){console.log("ADDED");localStorage.setItem('coins',JSON.stringify(ArrC))};
if(localStorage.getItem('stocks') == null){console.log("ADDED2");localStorage.setItem('stocks',JSON.stringify(ArrS))};