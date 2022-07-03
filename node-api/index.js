const express = require('express');
const morgan = require('morgan');
const app = express();

function commonMW(req, res, next) {
  console.log('commonMW');
  next(new Error('error ouccered'));
}

function errorMW(err, req, res, next) {
  console.log(err.message);
  // 에러를 처리하거나
  next();
}

app.use(commonMW);
app.use(errorMW);

app.listen(3000, function() {
  console.log('Server is running');
})