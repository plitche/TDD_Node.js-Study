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
        });
        it('최대 limit 갯수만큼 응답한다 ', (done) => {
            request(app)
            .get('/users?limit=2')
            .end((err, res) => {
                res.body.should.have.lengthOf(2);
                done(); // 비동기 처리를 위한 함수
            })
        });
    })
    describe('실패시', () => {
        it('limit이 숫자형이 아니면 400을 응답한다.', (done) => {
            request(app)
            .get('/usets?limit=two')
            .expect(400) // 슈퍼 테스트는 상태코드를 검증할 수 있는 validate를 제공한다.
            .end(done);
        })
    })
})

describe('GET /user/1는', () => {
    describe('성공시', () => {
        it('id가 1인 유저 객체를 반환한다.', (done) => {
            request(app)
            .get('/user/1')
            .end((err, res) => {
                res.body.should.have.property('id', 1);
                done();
            })
        })
    });
    describe('실패시', () => {
        it('id가 숫자가 아닐경우 400으로 응답한다', (done) => {
            request(app)
            .get('/user/one')
            .expect(400)
            .end(done);
        });
        it('id로 유저를 찾을수 없을 경우 404로 응답한다', (done) => {
            request(app)
            .get('/user/999')
            .expect(404)
            .end(done);
        });
    })
})