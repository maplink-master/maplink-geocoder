const Auth = require('./auth'),
	freeform = require('./geocode/freeform'),
	structured = require('./geocode/structured')

module.exports = function(clientSecret="", clientKey="") {

	if((!clientSecret.length && !clientKey.length) || !clientSecret.length){
		throw new Error("You must to send clientKey and clientSecret")
	}

	const auth = new Auth(clientSecret, clientKey)

	return {
		search: freeform(auth),
		structured: structured(auth)
	}
}