var all_routes = function(app){

	require('./common.route')(app);
	require('./admin.route')(app);
	
    //other routes..
}
module.exports = all_routes;