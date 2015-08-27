var http = require('http');
var bl = require('bl');

var results = [];
var processed = 0;

function logResults(){
  results.forEach(function (res){
    console.log(res);
  })
}

function getResult(index){
  http.get(process.argv[2+index], function (response){
    response.pipe(bl(function (error, data){
      if (error)
        return console.error("ERROR", error);
      results[index] = data.toString();
      processed += 1;
      if (processed == 3)
        logResults();
    }))
  })
}

for(var i = 0; i < 3; i++)
  getResult(i);
