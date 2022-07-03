const express = require('express');
const app = express();

function logger(req, res, next) {
  console.log('i am logger');
  next(); // next함수를 호출해야만이 다음 로직을 실행한다.
}

app.use(logger);

app.listen(3000, function() {
  console.log('Server is running');
})