var http = require('http')
var fs = require('fs')


    var onRequest = function(request,response){
        console.log('Request received '+ request.url);
        if(request.url === '/' || request.url === '/home'){
            response.writeHead(200,{'Content-Type':'text/html'});
            fs.createReadStream(__dirname + '/index.html','utf8').pipe(response);
        }else if(request.url === '/review'){
            response.writeHead(200,{'Content-Type':'text/html'});
            fs.createReadStream(__dirname + '/review.html','utf8').pipe(response);
        }else if(request.url === '/api'){
            response.writeHead(200,{'Content-Type':'application/json'});
            var jsonObj={
                name:"liwenqin",
                age:24,
            };
            response.end(JSON.stringify(jsonObj));
        }else{
            response.writeHead(200,{'Content-Type':'text/html'});
            fs.createReadStream(__dirname + '/404.html','utf8').pipe(response);
        }
    }
var server = http.createServer(onRequest);
server.listen(3000);
console.log('Server is running at localhost 3000');