var http = require('http');
var url = require('url');

function parseTime(time){
  return {
    hour : time.getHours(),
    minute : time.getMinutes(),
    second : time.getSeconds()
  }
}

function parseUnixTime(time){
  return { unixtime : time.getTime() }
}

var server = http.createServer( function (request, response){
  if (request.method != 'GET')
    return res.end("ERROR: expecting GET requests");

  var result;
  var req_url = url.parse(request.url, true);
  var time = new Date(req_url.query.iso);

  var parsetime_regex = /^\/api\/parsetime/
  var unixtime_regex = /^\/api\/unixtime/

  if (parsetime_regex.test(request.url))
    result = parseTime(time);
  else if (unixtime_regex.test(request.url))
    result = parseUnixTime(time);

  if (result){
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(result));
  }
  else{
    response.writeHead(404);
    response.end();
  }
})

server.listen(process.argv[2]);
