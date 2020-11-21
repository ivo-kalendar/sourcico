const fs = require('fs');

let authorsFile = fs.readFileSync('./config/authors.json');
let data = JSON.parse(authorsFile);

module.exports = data;
