var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/booksToRead");

module.exports.User = require('./user');
module.exports.Book = require('./book');