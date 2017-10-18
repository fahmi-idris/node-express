var express = require('express')
var home = require('./home/home')
var users = require('./users/users')

module.exports = function(app) {
	// Route list
	app.use('/', home)
	app.use('/users', users)


	// Response
	require('./response/response')(app)
}