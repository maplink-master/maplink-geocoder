const auth = require("../auth/index.js")();

module.exports = (clientKey = "", clientSecret = "") => {
	if(clientKey.length === 0 && clientSecret.length === 0){
		throw new Error("You must to send clientKey and clientSecret.");
	}

	this.clientKey = clientKey;
	this.clientSecret = clientSecret;
	this.signature = null;

	let tokenGenerator = (uri = "", body = {}) => {
		this.signature = auth.generator(uri, this.clientKey, this.clientSecret, body);
		debugger;
	};
	return {
		clientKey: this.clientKey,
		clientSecret: this.clientSecret,
		tokenGenerator: tokenGenerator,
		signature: this.signature
	};
};
