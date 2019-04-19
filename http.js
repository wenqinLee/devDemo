var http = require('http');
function startServer(){
    var onRequest = function(request,response){
        console.log('request received!');
        response.writeHead(200,{'Content-Type':'application/json'});
    
        var myObj={
            name:"liwenqin",
            job:"engineer",
            age:23,
        };
    
        response.end(JSON.stringify(myObj));
    }
    
    // var server  = http.createServer(function(request,response){
    //     console.log('request received!');
    //     response.writeHead(200,{'Content-Type':'text/plain'});
    //     response.end('Hello from out app');
    // });
    
    var server = http.createServer(onRequest);
    server.listen(3000,'127.0.0.1');
    console.log('the server is runing at port 3000');
}

module.exports.startServer = startServer;
