var express = require('express');
var app = express();

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
};

app.configure(function() {
  app.use(allowCrossDomain);
});

app.get('/', function(req, res){
  res.send('hello world');
});

// var server = app.listen(4567, function() {
//     console.log('Listening on port %d', server.address().port);
// });

var port = process.env.PORT || 8001;
var host = process.env.HOST || '0.0.0.0';
console.log('Starting dev REST server on http://%s:%d/', host, port);
app.listen(port, host);