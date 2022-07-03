const express = require('express')
const app = express()
const port = 3000

// 라우팅 설정
app.get('/', (req, res) => { // 익스프레스 어플리케이션의 메소드(HTTP 메서드)
  res.send('Hello World!')
})

app.post('/users', function(req, res) {
  // create user...
  res.send('user');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})