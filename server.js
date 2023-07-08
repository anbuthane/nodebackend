var http = require('http');
var fs= require('fs');
var dt = require('./myfirstmodule');
var url = require('url');
var uc = require('upper-case');
var events = require('events');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write("My FIrst Module time is "+dt.myfirstmodule());
        res.write(" URL is "+req.url);
        res.write('Hello World!');

    fs.readFile('demofile.html',function (err,data){
       
res.write(data);
return res.end();
    });
    fs.appendFile('message.txt','This is my created file',function (err)
    {
if(err)
{
    throw err;
}
console.log('saved');

    });



fs.open('openfile.txt','w',function(err){
    if(err)
    {
        throw err;
    }
    console.log('created');
});


fs.writeFile('writefile.txt','Wrote new Line2',function(err)
{
    if(err)
    {
        throw err;
    }
    console.log('written');
});
fs.unlink('writetemp.txt', function (err) {
    if (err)  console.log('File not ofound!');
    else //Fire the 'scream' event:
    eventEmitter.emit('deleted');
  });
  var q = url.parse(adr, true);
  console.log(q.host);
  console.log(q.pathname);
  console.log(q.search);
  var qdata = q.query;
console.log(uc.upperCase(qdata.month));
var eventEmitter = new events.EventEmitter();

var myEventHandler = function () {
    console.log('file deleted event');

  }
  
  //Assign the event handler to an event:
  eventEmitter.on('deleted', myEventHandler);
  
  

}).listen(8080);
