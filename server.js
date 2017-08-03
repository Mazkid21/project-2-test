//Setting up Express 
var express = require('express');
var app = express();

var db = require('./models');

// Setting up bodyParser 
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));

//serve static files from public folder 
app.use(express.static(__dirname + '/public'));

// Set up EJS (dont know if im going to use EJS or not)
// app.set('views', __dirname + "/views");
// app.engine('ejs', require('ejs').renderFile);
// app.set('view engine', 'ejs');

// Get those routes
// var routes = require(__dirname + '/config/routes');
// app.use('/', routes);

//Start server 
app.listen(process.env.PORT || 3000, function() {
	console.log("Listening at http://localhost:3000");
});