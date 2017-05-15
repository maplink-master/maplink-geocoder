const url = require("url");
const crypto = require("crypto");

function generate(uri, body, credentials) {

	if (credentials.clientSecret && !credentials.clientKey) {
		return credentials.clientSecret
	}

	let parsedUrl = url.parse(uri);
	let signatureElements = !Object.keys(body).length === 0 ? `${parsedUrl.path}&applicationCode=${credentials.clientKey}${body}` : `${parsedUrl.path}&applicationCode=${credentials.clientKey}`;
	let usablePrivateKey = credentials.clientSecret.replace("-", "+").replace("_", "/");
	let privateKeyBuffer = new Buffer(usablePrivateKey, "base64");
	let pathAndQueryBuffer = new Buffer(signatureElements, "utf8");
	let hash = crypto.createHmac("sha1", privateKeyBuffer)
							.update(pathAndQueryBuffer)
							.digest("base64");
	let signature = hash.replace("+", "-").replace("/", "_");
	return signature;
}

module.exports = function(clientSecret, clientKey) {
	this.clientSecret = clientSecret
	this.clientKey = clientKey

	return {
		generator: (uri, body) => generate(uri, body, this)
	}
}
