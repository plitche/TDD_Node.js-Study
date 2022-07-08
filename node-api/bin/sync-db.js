// db를 싱크하는 역할
const models = require('../models');

module.exports = () => {
    return models.sequelize.sync({force: true}); // 내부적으로 promise를 리턴하게 되어있다. 비동기 처리를완료할 수 있도록 인터페이스를 제공한다.
}