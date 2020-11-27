var express = require('express');
var fetch = require('node-fetch');
var app = express();


app.get('/index.html', function (req, res) {
  res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/main.js', function (req, res) {
  res.sendFile( __dirname + "/" + "main.js" );
})

app.get('/prices/GOOG', function (req, res) {
  //  res.send('Hello World - pornhub');
  // res.setHeader('Content-Type', 'application/json');
   res.end(JSON.stringify({
     "ticker": "GOOG",
     "price": 1764
   }))
})

app.get('/prices/AAPL', function (req, res) {
  //  res.send('Hello World - pornhub');
  res.setHeader('Content-Type', 'application/json');
   res.end(JSON.stringify({
     "ticker": "AAPL",
     "price": 123
   }))
})


app.get('/api/prices/:ticker', function (req, res) {
  const ticker = req.params.ticker;
  res.setHeader('Content-Type', 'application/json');
  fetch(`https://data.messari.io/api/v1/assets/${ticker}/metrics?fields=market_data`)
  .then(response => response.json())
  .then((response) => {
    const price = response.data.market_data.price_usd  
    res.end(JSON.stringify({
      "ticker": ticker,
      "price": price
    }))
  })
})

app.get('/api/volume/:ticker', function (req, res) {
  const ticker = req.params.ticker;
  res.setHeader('Content-Type', 'application/json');
   res.end(JSON.stringify({
     "ticker": ticker,
     "volume": "20mm"
   }))
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://localhost:%s", host, port)
})