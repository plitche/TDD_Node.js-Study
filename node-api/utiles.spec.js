const utils = require('./utiles.js');
// const assert = require('assert');
const should = require('should');

describe('utils.js모듈의 capitalize() 함수는 ' , () => { // test suit
    it('문자열의 첫번째 문자를 대문자로 변환한다.', () => { // test case
        // test code
        const result = utils.capitialize('hello');
        //assert.equal(result, 'Hello');
        result.should.be.equal('Hello');
    })
})