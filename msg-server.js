var http = require('http');
var url = require('url');
var fs = require('fs');

var dlr = 'no status';

http.createServer(function (req, res) {
	var q = url.parse(req.url, true);
	switch (q.pathname) {

		case "/msg-sender.html": 	
		var filename = "." + q.pathname;
		fs.readFile(filename, function(err, data) {
			if(err) {
				error(res);
			}
			writeFile(data, res, 'text/html');
		});
		break;

		case "/msg-sender.js":
		var filename = "." + q.pathname;
		fs.readFile(filename, function(err, data) {
			if(err) {
				error(res);
			}
			writeFile(data, res, 'text/html');
		});
		break;

		case "/msg-sender.css":
		var filename = "." + q.pathname;
		fs.readFile(filename, function(err, data) {
			if(err) {
				error(res);
			}
			writeFile(data, res, 'text/css');
		});
		break;

		case "/dlr":
		dlr = q.query.status;
		break;

		case "/upd":
		writeFile(dlr, res, 'text/html');
		break;

		default:
		error(res);
	}
	
}).listen(8080);
console.log('Listening at 8080');

function writeFile(file, res, type)
{
	res.writeHead(200, {'Content-Type': type})
	res.write(file);
	return res.end();
}

function error(res)
{
	res.writeHead(404, {'Content-Type': 'text/html'});
	return res.end("404 Not Found");	
}