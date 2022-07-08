// api 로직
const models = require('../../models');

const index = function (req, res) { // 익스프레스 어플리케이션의 메소드(HTTP 메서드)
    req.query.limit = req.query.limit || 10;
    const limit = parseInt(req.query.limit, 10); // "2" (정수, 진수)
    if (Number.isNaN(limit)) {
      return res.status(400)
    }

    models.User.findAll({
      limit: limit // 파라미터로 where 조건을 넘길 수도 있다.
    })
      .then(users => {
        res.json(users);
      })

    res.send(users.slice(0, limit));
 };

const show = function(req, res) {
    const id = parseInt(req.params.id, 10);
    if(id.isNaN) return res.status(400).end();
  
    models.User.findOne({
      where: {id} // key와 value가 같으면 하나만 적어도 된다.
    }).then(user => {
      if (!user) return res.status(400).end();
      res.json(user);
    })
  };

const destroy = function(req, res) {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) return res.status(400).end();
  
    users = users.filter(user => user.id !== id);
    // id가 삭제할 id와 같이 않은 아이들만 filter해서 새로운 배열을 기존 배열과 바꾼다.
    res.status(204).end();
  }

const create = function (req, res) {
    const name = req.body.name;
    if (!name) return res.status(400),end();
  
    const isConflic = users.filter(user => user.name === name).length
    if (isConflic) return res.status(409).end();
  
    const id = Date.now();
    const user = {id, name};
    users.push(user);
    res.status(201).json(user);
  }

  const update = function (req, res) {
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
  }

//  module.exports = {
//     index: index,
//     show: show,
//     destroy: destroy,
//     create: create,
//     update: update
//  }

 module.exports = {index, show, destroy, create, update};

