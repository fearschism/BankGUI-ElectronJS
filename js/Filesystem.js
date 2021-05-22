var fs = require('fs');

var readMe = fs.readFileSync('Data\\AdminsLogin.txt', 'utf8').split('/\r?\n/');
const [username,password] = readMe;
console.log(readMe," ");