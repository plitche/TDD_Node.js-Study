// 라우팅 설정 로직
const express = require('express');
const router = express.Router();
const ctrl = require('./user.ctrl');

// /users라는 경로를 루트 폴더의 index.js에 설정해놓았기 때문에 알아서 들어온다.
 router.get('/', ctrl.index); // /users의 routing에 대한 컨트롤러 함수를 바인딩
 router.get('/:id', ctrl.show);
 router.delete('/:id', ctrl.destroy);
 router.post('/', ctrl.create);
 router.put('/:id', ctrl.update);

  // root에 있는 index.js에서 써야하기 때문에 module로 export한다.
  module.exports = router;
