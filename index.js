var express = require('express'),
	app = express(),
	webapp = require('./app/app');
	
webapp(app);



app.get('/',function (req, res) {
  		res.send('Hello in login')
})
/*
* Server
*/
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})