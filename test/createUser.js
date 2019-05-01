'use strict'

const User = require('../models').User

const nuevoUsuario = {
	firstname	:	'Wilman',
	lastname	:	'Sirit',
	email		:	'wsirit@gmail.com',
	personalId	:	'9525657',
	password	:	'123456'
}

User.create(nuevoUsuario)
	.then( data => {

		console.log( data );
		
	})
