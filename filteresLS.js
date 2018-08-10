var fs = require('fs')
var path = require('path')

var filename = process.argv[2]
var filename2 = '.' + process.argv[3]

fs.readdir(filename, function (err, data) {
  if (err) return console.error(err)
  data.forEach(function(file) {
      if (path.extname(file) === filename2) {
          console.log(file)
      }
  })
})
