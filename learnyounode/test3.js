var fs = require('fs')
var file = fs.readFileSync(process.argv[2]).toString()
var lines = file.split('\n').length - 1

console.log(lines)