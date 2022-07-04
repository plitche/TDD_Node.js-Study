var express = require('express')
var app = express()
var morgan = require('morgan')
var port = 3000
var users = [
  {id: 1, name: 'aplice'},
  {id: 2, name: 'bek'},
  {id: 3, name: 'chris'}
];

app.use(morgan('dev'));

// 라우팅 설정
app.get('/users', (req, res) => { // 익스프레스 어플리케이션의 메소드(HTTP 메서드)
  res.send(users);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;