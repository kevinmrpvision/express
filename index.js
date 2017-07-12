var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
	session = require('express-session');
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));
var bodyParser = require('body-parser')
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

app.get('/',function (req, res) {
  		res.send('Hello in login')
})
/*
* Server
*/
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})