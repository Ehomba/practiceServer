
//requires the HTTP from node
var http = require("http");
//sets the port
var PORT1 = 7000; 
//the function that handles the requests and responses to the server
function handleRequest(request, response){
    response.end("YOU GOOD " + request.url)
};
//the server
var server = http.createServer(handleRequest);
//what the server listens for 
server.listen(PORT1, function(){
    console.log(`Server listening on http://localhost:${PORT1}`)
});

var PORT2 = 7500;

function handleRequest2 (request, response){
    response.end("OH NO NO NO! WORK ON YOURSELF" + request.url)
};

var server2 = http.createServer(handleRequest2);

server2.listen(PORT2, function(){
    console.log(`Server listening on http://localhost:${PORT2}`)
});