var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
	name: String,
	author: String

});		

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;