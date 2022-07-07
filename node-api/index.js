var express = require('express')
var app = express()
var morgan = require('morgan')
var bodyParser = require('body-parser')
var port = 3000
var user = require('./api/user/index.js'); // index.js는 생략 가능

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

app.use('/users', user); // /users로 들어오는 모든 요청은 user가 담당한다.

module.exports = app;