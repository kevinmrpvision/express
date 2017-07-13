

var common_router = function(app){
    app.route('/login')
    .get(function (req, res) {
  		res.send('Login page')
	})
	.post(function(req,res){
		console.log(req.body);
		if (!req.body.username || !req.body.password) {
    		res.send('login failed');    
  		} else if(req.body.username === "kevin" || req.body.password === "Ossc@2014") {
  			var user = {
  				username:'kevin',
  				first_name:'Kevin',
  				last_name:'Patel',
  				email:'kevin@gmail.com',
  				user_type:'Admin'
  			}
    		req.session.user = user;
    		res.redirect("/admin/dashboard");
  		}
	});
	app.get('/home', function (req, res) {
  		res.send('Home page')
	})
	app.get('/contact-us', function (req, res) {
  		res.send('Contact us page')
	});
	// Logout endpoint
	app.get('/logout', function (req, res) {
  		req.session.destroy();
  		res.send("logout success!");
	});

    //other routes..
}
module.exports = common_router;