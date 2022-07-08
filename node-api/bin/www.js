const app = require('../index');

// db sync
const syncDb = require('./sync-db');

syncDb().then( () => {
    console.log('Sync database!');
    app.listen(3000, () => {
        console.log('Server is running on 3000 port');
    });
})
