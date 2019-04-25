const http=require("http");
const server=http.createServer(function(req,res){
	res.writeHead(200,{'content-type':'text/plain'})
	res.end("ok");
})

server.listen(3010);

const client=http.get('http://127.0.0.1:3010',function(res){
	console.log('httpVersion',res.httpVersion);
	console.log("返回码",res.statusCode);
	console.log("正文")
	res.pipe(process.stdout);
})