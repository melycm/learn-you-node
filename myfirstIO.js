var fs = require('fs');
var filename = process.argv[2];

var text = fs.readFileSync(filename, 'utf8');

var result = text.toString().split('\n').length - 1

console.log(result);


