var express = require('express');
var app = express();
var request = require('request');


app.get('/', function (req, res) {
   res.send('add /users in address \r bar for list of users');
})


app.get('/users', function(req, res) {
    request('https://jsonplaceholder.typicode.com/users', function(error, response, body) {
        res.send(JSON.parse(body))
    });
});


var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})