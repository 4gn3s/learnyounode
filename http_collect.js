var bl = require('bl');
var http = require('http');

var url = process.argv[2];

http.get(url, function (response){
  response.pipe(bl(function (error, data){
    if(!error){
      var str = data.toString();
      console.log(str.length);
      console.log(str);
    }
    else{
      return console.error("HTTP collect error", error);
    }
  }))
})
