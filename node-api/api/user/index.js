// 라우팅 설정 로직
const express = require('express');
const router = express.Router();

var users = [
    {id: 1, name: 'aplice'},
    {id: 2, name: 'bek'},
    {id: 3, name: 'chris'}
    ];

    // /users라는 경로를 루트 폴더의 index.js에 설정해놓았기 때문에 알아서 들어온다.
 router.get('/', (req, res) => { // 익스프레스 어플리케이션의 메소드(HTTP 메서드)
    req.query.limit = req.query.limit || 10;
    const limit = parseInt(req.query.limit, 10); // "2" (정수, 진수)
    if (Number.isNaN(limit)) {
      return res.status(400)
    }
    res.send(users.slice(0, limit));
 });
  
 router.get('/:id', function(req, res) {
    const id = parseInt(req.params.id, 10);
    if(id.isNaN) return res.status(400).end();
  
    const user = users.filter((user) => user.id === id)[0];
    if (!user) return res.status(400).end();
    res.json(user);
  });
  
  router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) return res.status(400).end();
  
    users = users.filter(user => user.id !== id);
    // id가 삭제할 id와 같이 않은 아이들만 filter해서 새로운 배열을 기존 배열과 바꾼다.
    res.status(204).end();
  });
  
  router.post('/', (req, res) => {
    const name = req.body.name;
    if (!name) return res.status(400),end();
  
    const isConflic = users.filter(user => user.name === name).length
    if (isConflic) return res.status(409).end();
  
    const id = Date.now();
    const user = {id, name};
    users.push(user);
    res.status(201).json(user);
  });
  
  router.put('/:id', (req, res) => {
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
  });

  // root에 있는 index.js에서 써야하기 때문에 module로 export한다.
  module.exports = router;
