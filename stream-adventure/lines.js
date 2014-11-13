var split   = require('split');
var through = require('through');
var lines   = 0;

process.stdin
   .pipe(split())
   .pipe(through(function(line) {
      lines += 1;
      this.queue(lines % 2 === 0
         ? (line.toString() + '\n').toUpperCase()
         : (line.toString() + '\n').toLowerCase());
   }))
   .pipe(process.stdout)
