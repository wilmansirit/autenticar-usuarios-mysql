'use strict'


module.exports = {


	signUp		:	(req, res) => {

						const message = req.flash('error');						
						res.render('auth/signUp', { message	: 	message });

					},

	signIn		: 	(req, res) => {

						const message = req.flash('error');						
						res.render('auth/signIn', { message	: message });

					},

	logout		:	(req, res) => {

						req.session.destroy( err => res.redirect('/'))
						
					},

	dashboard	:	(req, res, next) => {
		
						res.render('dashboard', {
							user: req.user,
							isAuthenticated: req.isAuthenticated()
						});

					}

};