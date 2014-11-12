var http       = require('http');
var port       = process.argv[2];
var stream     = process.argv[3];
var fs         = require('fs')
var file       = fs.createReadStream(stream)

var server = http.createServer(function(req, res){
   file.pipe(res)
})

server.listen(port)