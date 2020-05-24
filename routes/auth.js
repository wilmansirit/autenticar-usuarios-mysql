'use strict'

const controllers = require('../controllers')
	, express = require('express')
	, router = express.Router()
	, passport = require('passport')


/* GET signUp page. */
router.get('/signUp', controllers.Auth.signUp);

/* GET signIn page. */
router.get('/signIn', controllers.Auth.signIn);

/* GET logout */
router.get('/logout', controllers.Auth.logout);

/* POST SignUp */
router.post('/signUp', (req, res) => {

	// Express Validator
	req.check('firstname', 'Solo se permiten caracteres para el campo de nombre').isAlpha();
	req.check('firstname', 'Solo se permiten caracteres para el campo de nombre').isAlpha();
	req.check('email', 'El email es inválido').isEmail()
	req.check('personalId', 'Ingrese un número válido para la cédula').isInt().isLength({ min: 7, max: 8 });
	req.check('password', 'Use un password más largo').isLength({ min: 5 });

	const errors = req.validationErrors();

	if (errors) {

		res.render('auth/signUp', { message: errors });

	} else {

		passport.authenticate('local-signUp', {

			successRedirect: '/dashboard',
			failureRedirect: '/auth/signUp',
			failureFlash: true

		})(req, res);
	}
});

/* Using passport */
router.post('/signIn', passport.authenticate('local-signIn', {

	successRedirect: '/dashboard',
	failureRedirect: '/auth/signIn',
	failureFlash: true

}))

function isLoggedIn(req, res, next) {

	if (req.isAuthenticated()) return next();
	res.redirect('/auth/signIn');

}

module.exports = router;

// const error = req.validationErrors();
// if(error) {
// 	req.session.errors = errors;	
// }
// res.redirect('/')