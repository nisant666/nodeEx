var express = require('express');
var app = express();
var request = require('request');
var jar = request.jar();
var cookie = request.cookie("name=Nisant35");


app.get('/', function (req, res) {
   res.send('add /setcookie in address bar for setting cookies');
})


app.get('/setcookie', function(req, res) {
    jar.add(cookie);
	request({
  	uri: "http://www.cjihrig.com/development/php/hello_cookies.php",
  	method: "GET",
 	 jar: jar
}, function(error, response, body) {
  console.log(body);
    });
});


var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})