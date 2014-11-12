var http       = require('http');
var url        = require('url');
var port       = process.argv[2];
var map        = require('through2-map');

function isoFormat(date) {
   return {"hour": date.getHours(),
   "minute": date.getMinutes(),
   "second": date.getSeconds()}
}

function unixFormat(date) {
   return { "unixtime": Math.round(date.getTime())}
}

var server = http.createServer(function(req, res){
   var data = url.parse(req.url, true);
   var date = new Date(data.query.iso);
   if(data.pathname === '/api/parsetime') {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      return res.end(JSON.stringify(isoFormat(date)))
   } else if(data.pathname === '/api/unixtime') {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      return res.end(JSON.stringify(unixFormat(date)))
   } else {
      res.writeHead(404)
      res.end()
   }
})

server.listen(port)