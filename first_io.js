var fs = require('fs'); //filesystem module

var lines = fs.readFileSync(process.argv[2], 'utf-8').split('\n');
console.log(lines.length - 1);
