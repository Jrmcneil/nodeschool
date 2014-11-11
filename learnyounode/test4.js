fs.readFile(process.argv[2], function callback (err, data) {
   if(err) throw err;
   console.log(data.toString().split('\n').length - 1);
})