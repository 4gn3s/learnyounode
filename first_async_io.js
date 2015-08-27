var fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', function doneReading(error, fileContents){
  if (!error){
    lines = fileContents.split('\n');
    console.log(lines.length - 1);
  }
})

