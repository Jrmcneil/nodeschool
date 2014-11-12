var net        = require('net');
var port       = process.argv[2];
var date       = new Date();
var year       = date.getFullYear();
var month      = date.getMonth() + 1;
var day        = date.getDate();
var hours      = addZero(date.getHours());
var minutes    = addZero(date.getMinutes());

function addZero(input){
   return (input < 10 ? '0' : '') + input
} 

var dateString = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + '\n'


var server = net.createServer(function(socket){
   socket.end(dateString)
})

server.listen(port)

