var spawn = require('child_process').spawn;
var dup = require('duplexer')

module.exports = function (cmd, args) {
   var data = spawn(cmd, args);
   return dup(data.stdin, data.stdout);
};