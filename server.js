var http = require('http');
var fs = require('fs');
for(var i =201;i <  503;i++){
	if (i==404) continue
	console.log(i);
}

function send404Response(response){
	response.writeHead(404,{'Content-Type': 'text/plain'});
	response.write("error 404");
	response.end();
}

function onRequest(request,response){

	if (request.method == "GET" && request.url == "/"){
		response.writeHead(i,{'Content-Type': 'text/html'});
		//response.writeHead(200,{'Content-Type': 'text/html'});
		
		fs.createReadStream("./shedevx.html").pipe(response);
	}else{
		send404Response(response);
	}

}
http.createServer(onRequest).listen(3000);
