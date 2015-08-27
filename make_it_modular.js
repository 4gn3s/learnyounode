var filterByExtension = require('./my_files_module.js');
var directory = process.argv[2];
var extension = process.argv[3];

filterByExtension(directory, extension, function (error, list){
  if(error)
    console.error('Error: ', error);

  list.forEach(function (file){
    console.log(file);
  })
})
