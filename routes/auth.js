'use strict'

const 	controllers = require('../controllers')
	,	express		= require('express')
	,	router		= express.Router()
	,	passport	= require('passport')

	require('../passport/passport')


	/* GET signUp page. */
	router.get('/signUp', controllers.Auth.signUp);

	/* GET signIn page. */
	router.get('/signIn', controllers.Auth.signIn);

	/* GET logout */
	router.get('/logout', controllers.Auth.logout);

	/* GET Dashboard */
	router.get('/dashboard', isLoggedIn, controllers.Auth.dashboard);

	/* Using passport */
	router.post('/signUp', passport.authenticate('local-signUp', {

		successRedirect	:	'/auth/dashboard',
		failureRedirect	:	'/auth/signUp',
		failureFlash	:	true

	}));

	router.post('/signIn', passport.authenticate('local-signIn', {

		successRedirect	:	'/auth/dashboard',
		failureRedirect	:	'/auth/signIn',
		failureFlash	:	true

	}))


	function isLoggedIn(req, res, next) {

		if (req.isAuthenticated()) return next();
		res.redirect('/auth/signIn');

	}

	module.exports = router;