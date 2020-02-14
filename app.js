var http= require('http');
var server= http.createServer(function(req, res){
	res.end('<html><body><h1>Primeiro projeto node</h1></zbody></html>')
});
server.listen(3000);