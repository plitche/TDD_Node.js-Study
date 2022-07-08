const Sequelize = require('sequelize');
const sequelize = new Sequelize({  //db와 연동
    dialect: 'sqlite',
    db: './db.sqlite' // db는 파일형태이기 때문에 파일로 저장할 경로명을 지정
})
                    // 만들 테이블 명, 테이블의 속성
const User = sequelize.define('User', {
    name: Sequelize.STRING // varchar 255
});

