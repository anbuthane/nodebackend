var http = require('http');
var dt = require('./myfirstmodule');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("My FIrst Module time is "+dt.myfirstmodule());
    res.write(" URL is "+req.url);
    res.end('Hello World!');
}).listen(8080);
