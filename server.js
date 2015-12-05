
// dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
//Mongoose
mongoose.connect("mongodb://Rohail:abcd@ds035713.mongolab.com:35713/restfullapidata");
//Express
var app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

// routes
app.use('/api',require('./routes/api'));
app.all('*',function(req,res){
		res.end("Thats a 404 bro");
});

// start server
app.listen(3000);
console.log("listening on port 3000");