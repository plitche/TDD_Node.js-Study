const express = require('express');
const app = express();

function logger(req, res, next) {
  console.log('i am logger');
  next(); // next함수를 호출해야만이 다음 로직을 실행한다.
}

function logger2(req, res, next) {
  console.log('i am logger2');
  next();
}

app.use(logger);
app.use(logger2);

app.listen(3000, function() {
  console.log('Server is running');
})