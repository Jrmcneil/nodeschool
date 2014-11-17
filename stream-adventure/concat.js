var concat = require('concat-stream');
var http = require('http');
var write = concat(function(data){})


process.stdin.pipe(concat(function(data){
      process.stdout.write(data.toString().split('').reverse().join(''));
      process.stdout.write('\n')
   }))




   //    concat(function(body){
   //    console.log(body)
   //    // body.split('').reverse().join('')
   // }))
   // .pipe(process.stdout)
   // process.stdout.write(