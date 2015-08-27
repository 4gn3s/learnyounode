var net = require('net');

function fillZero(string){
  if (string.length < 2)
    string = "0" + string;
  return string;
}

function getCurrentDate(){
  var date = new Date();
  var date_str = date.getFullYear() + "-";
  date_str += fillZero((date.getMonth() + 1).toString()) + "-";
  date_str += fillZero(date.getDate().toString()) + " ";
  date_str += fillZero(date.getHours().toString()) + ":";
  date_str += fillZero(date.getMinutes().toString()) + "\n";
  return date_str;
}

var server = net.createServer(function (socket){
  socket.write(getCurrentDate());
  socket.end();
})

server.listen(process.argv[2]);
