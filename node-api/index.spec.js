const app = require('./index.js');
const request = require('supertest');
const should = require('should');

describe('GET /users는', () => {
    describe('성공시', () => {
        it('유저 객체를 담은 배열로 응답한 ', (done) => { 
            request(app)
                .get('/users')
                .end((err, res) => {
                    res.body.should.be.instanceOf(Array);
                    done(); // 비동기 처리를 위한 함수
                })
        })
    })
    
})

