var fs = require('fs');

var filename = process.argv[2];

var text = fs.readFile(filename, 'utf8', function (error, buffer){
    if (error) {
        console.error(error.message);
    return;
    }
    console.log(buffer.toString().split('\n').length - 1);
});
