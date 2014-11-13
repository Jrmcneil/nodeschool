var through = require('through');

function toUpper(buf) { 
   this.queue(buf.toString().toUpperCase()) 
}

process.stdin.pipe(through(toUpper)).pipe(process.stdout);