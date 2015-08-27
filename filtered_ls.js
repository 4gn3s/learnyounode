var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir(directory, function doneReading(error, listOfFiles){
  if(!error){
    listOfFiles.forEach(function (file){
       if (path.extname(file) == extension){
         console.log(file);
       }
    })
    // for(var i = 0; i < listOfFiles.length; i++){
    //   if (path.extname(listOfFiles[i]) == extension){
    //     console.log(listOfFiles[i]);
    //   }
    // }
  }
})
