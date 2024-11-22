var http = require('http');

http.createServer(function (req, res) {
 res.write('Vsem privet');
 res.end();
}).listen(8080);
