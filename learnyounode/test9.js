var http = require('http');
var bl = require('bl');
var array =  [];
// var urls = process.argv.slice(2);
var counter = 0;

function urls(index){
  http.get(process.argv[2 + index], function callback(response){
    response.pipe(bl(function(err,data){
      array[index] = data.toString();
      counter += 1; 
      if (array.length === 3) {
          array.forEach(function(value) {
            console.log(value)
        })
      }
    }));
  })
}

for(var i = 0; i < 3; i++)
  urls(i)
