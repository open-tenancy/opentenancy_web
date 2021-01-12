"use strict"

var quotes = ["Problems with your landlord?", "Has your water stopped working?", "No heating in your flat?", "Flat filled with pests?", "No hot water?"];

writeQuote();

function writeQuote() {
  var quote;
    quote=document.getElementsByClassName("quote")[0]; //will change as ian doesnt like this, but for now
    quote.innerHTML = quotes[randomNum()]; //find a way to include into page/innerText maybes?
}

function randomNum() {
  var curr_quote;
  curr_quote = Math.floor((Math.random() * (quotes.length)));
  return curr_quote;
}
