var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Book = require('./book');

var UserSchema = new Schema({
	email: String,
	password: String,
	books: [Book.schema]
});
	
var User = mongoose.model('User', UserSchema);

module.exports = User;