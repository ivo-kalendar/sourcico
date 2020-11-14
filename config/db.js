const fs = require('fs');

let authorsFile = fs.readFileSync('./config/test.json');
let data = JSON.parse(authorsFile);

module.exports = data;
