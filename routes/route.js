var express = require('express')
var home = require('./home/route.home')
var users = require('./users/route.users')

module.exports = function(app) {
	// Route list
	app.use('/', home)
	app.use('/users', users)


	// Response
	require('./response/response')(app)
}