const Sequelize = require('sequelize');
const sequelize = new Sequelize({  //db와 연동
    dialect: 'sqlite',
    storage: './db.sqlite', // db는 파일형태이기 때문에 파일로 저장할 경로명을 지정
    logging: false
})
                    // 만들 테이블 명, 테이블의 속성
const User = sequelize.define('User', {
    name: {
        type: Sequelize.STRING, // varchar 255
        unique: true
    }
});

module.exports = {Sequelize, sequelize, User};

