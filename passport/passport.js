'use strict'

const bCrypt		= 	require('bcrypt')

module.exports = (passport, user) => { 
		
	const User = user;
	const LocalStrategy = require('passport-local').Strategy;

	/* Local Sign Up Strategy */
	passport.use('local-signUp', new LocalStrategy(
		{
			usernameField		: 	'email',
			passwordField		:	'password',
			passReqToCallback	:	true
		},

		async (req, email, password, done) => {

			const generateHash = async ( password ) => {
				const salt = await bCrypt.genSalt(10);
				return await bCrypt.hash(password, salt);
			};

			const userExist = await User.findOne({where	: {email: email}});
			if (userExist) return done(null, false, {message: 'That email is already taken'})
		

			const idExist = await User.findOne({where: {personalId: req.body.personalId}})
			if (idExist) return done(null, false, {message: 'That Personal ID is already taken'})

			try {

				const data = {
					email		: email,
					firstname	: req.body.firstname,
					lastname	: req.body.lastname,
					personalId	: req.body.personalId,
					password	: await generateHash(password)
				};
				
				const newUser = await User.create( data );
				return done(null, newUser);

			} catch (err) {

				console.error(err);					
				return done(null, false);

			};
		
		}
	));

	/* Local Sign In Strategy */
	passport.use('local-signIn', new LocalStrategy(
		{
			usernameField		:	'email',
			passwordField		:	'password',
			passReqToCallback	:	true
		},

		async (req, email, password, done) => {

			const isValidPassword = async (hash, password) =>{
				return await bCrypt.compare(password, hash);
			};

			try {

				const validUser = await User.findOne({where	: {email: email}});
		
				/* if not a valid User */
				if( !validUser ) return done(null, false, {message: 'Email does not exist'});
		
				/* if not a valid password */
				if( !await isValidPassword(validUser.password, password)) return done(null, false, {message: 'Incorrect password'});
		
				/* All right*/
				return done(null, validUser.get());
				
			} catch (err) {
				
				console.error(err);
				return done(null, false, {message: 'Something went wrong with you Signin'});

			}

		}
	))


	passport.serializeUser( (user, done) => {

		done(null, user.id);

	});

	passport.deserializeUser((id, done) => {

		
		User.findByPk( id ).then( (user) => {
			
			if(user) {

				const data = user.get();
				delete data['password'];
				done(null, data);
				
			} else {
				
				done(user.errors, null)
				
			}
			
		});
	})

}


// module.exports = passport;