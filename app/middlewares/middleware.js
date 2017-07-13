module.exports = {
	add_filter : function (req, res, next) {
  		console.log('Time:', Date.now())
  		next()
	},
	auth :function(req, res, next) {
  		if (req.session && req.session.user)
    		return next();
  		else
    		return res.sendStatus(401);
	}
}
