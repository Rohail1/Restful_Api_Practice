//dependencies

var express = require('express');
var router = express.Router();

// Models

var product = require('../Models/products');
var customer = require('../Models/customer');

// routes

	// Produt Routes using node-restful
product.methods(['get','post','delete','put']);
product.register(router,'/product');

	// Customer Routes using on Mongoose

router.get('/customer',function(req,res){

	results = [];
	customer.find({},function(err,result){
			if (err) return console.log(err);
			console.log(result);
			res.send(result);
	});
	//res.send(results);
});

router.post('/customer',function(req,res){
	cusobj = {};
	cusobj.name = req.body.name;
	cusobj.age = req.body.age;
	cusobj.address = req.body.address;
	var cusObj = new customer(cusobj);
	cusObj.save(function(err){
		if (err) {return  console.log(err)};
		res.send("done desu");
	});

});

router.put('/customer/:id',function(req,res){
		ids = req.params.id;
	customer.findOne({name:ids},function(err,data){
			if (err) {return console.log(err)};
			//git test
			if (data === null) {return res.end("not found")};
			data.age = "23";
			data.save(function(err){
				if (err) {return console.log(err);};
				res.send("update :D ");
		});

	});
});

router.all('*',function(req,res){
		res.end("Thats a 404 bro");
});


router.delete('/customer/:id',function(req,res){
		id = req.params.id;
		customer.findOneAndRemove({name:id},function(err){
				if (err) {return console.log(err);};
				res.send("Deleted user");
		});

});


//return Router

module.exports = router;