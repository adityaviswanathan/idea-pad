// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '682059125197722', // your App ID
		'clientSecret' 	: 'ccd5562024b3d830cc2eda566398ec61', // your App Secret
		'callbackURL' 	: 'http://localhost:8080/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'HJktzCC0qfOkcouhHe7dGhoSL',
		'consumerSecret' 	: 'nEcpCaU6DA6iaLvzh21sVzCC5WnePbixLAs54bjlV6jXCjINQd',
		'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
	}
};