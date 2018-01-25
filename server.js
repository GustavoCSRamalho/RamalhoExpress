//server.js
var http = require('http');
var express = require('express');
var app = require('./config/express')(); //alterado
// var app = express();

// require('./config/express')(app);
// require('./config/passport')();
// require('./config/database.js')('mongodb://localhost/contatooh');
require('./config/database.js')('mongodb://admin:1893458276Gu@ds113648.mlab.com:13648/ramalhoexpress');

http.createServer(app).listen(process.env.PORT || app.get('port'), function(){
  console.log('Express server escutando a porta '+app.get('port'));
});
