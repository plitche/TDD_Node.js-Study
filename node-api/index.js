var express = require('express')
var app = express()
var morgan = require('morgan')
var bodyParser = require('body-parser')
var port = 3000
var users = [
  {id: 1, name: 'aplice'},
  {id: 2, name: 'bek'},
  {id: 3, name: 'chris'}
];

app.use(morgan('dev'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

// 라우팅 설정
app.get('/users', (req, res) => { // 익스프레스 어플리케이션의 메소드(HTTP 메서드)
  req.query.limit = req.query.limit || 10;
  const limit = parseInt(req.query.limit, 10); // "2" (정수, 진수)
  if (Number.isNaN(limit)) {
    return res.status(400)
  }
  res.send(users.slice(0, limit));
});

app.get('/user/:id', function(req, res) {
  const id = parseInt(req.params.id, 10);
  if(id.isNaN) return res.status(400).end();

  const user = users.filter((user) => user.id === id)[0];
  if (!user) return res.status(400).end();
  res.json(user);
});

app.delete('/usres/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();

  users = users.filter(user => user.id !== id);
  // id가 삭제할 id와 같이 않은 아이들만 filter해서 새로운 배열을 기존 배열과 바꾼다.
  res.status(204).end();
})

app.post('/users', (req, res) => {
  const name = req.body.name;
  if (!name) return res.status(400),end();

  const isConflic = users.filter(user => user.name === name).length
  if (isConflic) return res.status(409).end();

  const id = Date.now();
  const user = {id, name};
  users.push(user);
  res.status(201).json(user);
})

app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (Number.isNaN(id)) return res.status(400).end();

  const name = req.body.name;
  if (!name) return res.status(400).end();

  const isConflict = users.filter(user => user.name === name).length;
  if (isConflict) return res.status(409).end();

  const user = users.filter(user => user.id === id)[0];
  if (!user) return res.status(404).end();

  user.name = name;

  res.json(user);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;