const fs = require('fs');

// const data = fs.readFileSync('./data.txt', 'utf-8');
const data = fs.readFile('./data.txt', 'utf-8', function(err, data) {
    console.log(data);
});
