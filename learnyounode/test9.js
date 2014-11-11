var bl = require('bl')
var http = require('http');
var array =  new Array;
var arg = process.argv

http.get(arg[2], function callback (response){
   response.pipe(bl(function(err,data){
      var data = data.toString();
      array[0] = data; 
   }));
   response.on('end', function(){
      http.get(arg[3], function callback (response){
         response.pipe(bl(function(err,data){
            var data = data.toString();
            array[1] = data;
         }));
         response.on('end', function(){
            http.get(arg[4], function callback (response){
               response.pipe(bl(function(err,data){
                  var data = data.toString();
                  array[2] = data;
                  array.forEach(function(value) {console.log(value)})
               }))
            })
         });
      });
   });
})


// Th nodeschool answer (much simpler):
    // var http = require('http')
    // var bl = require('bl')
    // var results = []
    // var count = 0

    // function printResults () {
    //   for (var i = 0; i < 3; i++)
    //     console.log(results[i])
    // }

    // function httpGet (index) {
    //   http.get(process.argv[2 + index], function (response) {
    //     response.pipe(bl(function (err, data) {
    //       if (err)
    //         return console.error(err)

    //       results[index] = data.toString()
    //       count++

    //       if (count == 3) // yay! we are the last one!
    //         printResults()
    //     }))
    //   })
    // }

    // for (var i = 0; i < 3; i++)
    //   httpGet(i)





