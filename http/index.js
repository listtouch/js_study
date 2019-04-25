var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res){
	console.log(req.url);
    var urlObj = url.parse(req.url);
    var query = urlObj.query;
    var queryObj = querystring.parse(query);
    
    console.log( JSON.stringify(queryObj) );
    
    res.end('ok');
});

console.log("15151");

server.listen(3010);