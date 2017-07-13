var bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
	session = require('express-session'),
	config = require('./../config/app.config');

module.exports = function(app){
	app.config =  config
	console.log(app.config);
	app.use(session({
    	secret: '2C44-4D44-WppQ38S',
    	resave: true,
    	saveUninitialized: true
	}));

	app.use( bodyParser.json() );       // to support JSON-encoded bodies
	app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  		extended: true
	})); 
/*
* Middleware
*/
var middleware = require('./middlewares/middleware')
app.set('middleware',middleware);
/*
* Routes
*/
require('./routes/route')(app)

};