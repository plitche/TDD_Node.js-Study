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

---

30. 테스트 주도 개발(TDD) - 슈퍼테스트(superTest)2

```js
const app = require('./index.js');
const request = require('supertest');

describe('GET /users는', () => {
    it('...', (done) => { 
        request(app)
            .get('/users')
            .end((err, res) => {
                console.log(res.body)
                done(); // 비동기 처리를 위한 함수
            })
    })
})
```

- 비동기 처리??


33. TDD로 하는 API 서버 개발 - 사용자 목록 조회 API 테스트 코드 만들기 2

- req.query.limit = req.query.limit || 10;
  
 

