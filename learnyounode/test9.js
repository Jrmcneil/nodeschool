var http = require('http');
var bl = require('bl');
var array =  [];
var counter = 0;


function urls(index){

  http.get(process.argv[index], function processData(res){
    var count = array.length
    var line = ''
    res.on('data', function(body){
      line += body.toString();
    })
    res.on('end', function(){
      passToArray(index,line);
      
      if(count === 3) {
        array.forEach(function(value){
          console.log(value)
        })
      }
    })
  })
}

function passToArray(index, line){
  array[index - 2] = line;
  counter ++;
  return array;
}

for(var i = 2; i < 5; i++)
  urls(i)
