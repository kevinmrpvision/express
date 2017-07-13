var trim_middleware = function(app){
	var trim_filter = function (req, res, next) {
  		console.log('Request:', req)
  		next()
	};
}
module.exports = trim_middleware;