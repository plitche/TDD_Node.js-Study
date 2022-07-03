# TDD_Node.js-Study

14. 익스프레스(ExpressJS) 기초 - 에러 미들웨어

```js
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
```

- errorMW의 err에 파라미터가 전달되는 원리??
