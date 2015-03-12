var http = require('http');

var callback = function(request,response) {
  response.writeHead(200);
  response.write("hello, this is dog from a separate function.");
  response.end();
}

http.createServer(callback).listen(8080);
console.log('listening on port 8080');