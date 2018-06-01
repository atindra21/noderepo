var express = require('express');

//instantiate Express
var app = express();

//Set up REST responses
app.get('/', function(req, res){
  res.send('Hello from Express!');
});

//Start the server
app.listen(3000, function(){
  console.log("Express running on port 3000.");
});