'use strict'

const User	=	require('../models').User;

console.clear();

User.findOne({	where	:	{email	:	'wsirit@gmail.com'}})
	.then( (users) => {
			// console.log( JSON.parse(JSON.stringify( users )) );	
			// console.log( users.get() );
		})

User.findByPk(3)
		.then(user => console.log(user.get()))
		.catch(err => console.error( err ))