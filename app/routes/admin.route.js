

var admin_router = function(app){
	const prefix = '/admin/';
	var middleware = app.get('middleware');
    app.get(prefix + 'dashboard', middleware.auth,function (req, res) {
    	
  		res.send('Hello in dashboard Admin')
	})

    //other routes..
}
module.exports = admin_router;