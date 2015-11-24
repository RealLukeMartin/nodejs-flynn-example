var http = require('http');
var port = process.env.PORT || 5000;
var date = new Date();
var current_hour = date.getHours();

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('THIS IS A TEST BRANCH. The time is '+current_hour+' Flynn on port '+port+' from container '+process.env.HOSTNAME+'\n');
}).listen(port, function() {
  console.log("Listening on " + port);
});
