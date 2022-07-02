const http = require('http'); // 모듈 가져오기

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => { // 화살표 함수 es6

  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n'); // 클라이언트에게 보내줌
  } else if(req.url === '/users') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('User list');
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }

  
});

server.listen(port, hostname, () => { // 서버를 요청 대기상태로 만들어주는 함수
  console.log(`Server running at http://${hostname}:${port}/`);
});

// 요청 대기상태 : 서버가 클라이언트의 요청을 받기 위해서 대기하는 상태