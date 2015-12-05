// Dependencies
var mongoose = require('mongoose');

// Schema

var customerSchema = mongoose.Schema({

		name : String,
		age : Number,
		address : String
});


// Return Model

module.exports = mongoose.model('Customer',customerSchema);
