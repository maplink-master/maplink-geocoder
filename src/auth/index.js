const url = require("url");
const crypto = require("crypto");

module.exports = () => {
	let generator = (uri, clientKey, clientSecret, body) => {
		let parsedUrl = url.parse(uri);
		let signatureElements = !Object.keys(body).length === 0 ? `${parsedUrl.path}&applicationCode=${clientKey}${body}` : `${parsedUrl.path}&applicationCode=${clientKey}`;
		let usablePrivateKey = clientSecret.replace("-", "+").replace("_", "/");
		let privateKeyBuffer = new Buffer(usablePrivateKey, "base64");
		let pathAndQueryBuffer = new Buffer(signatureElements, "utf8");
		let hash = crypto.createHmac("sha1", privateKeyBuffer)
							.update(pathAndQueryBuffer)
							.digest("base64");
		let signature = hash.replace("+", "-").replace("/", "_");
		return signature;
	};
	return{
		generator: generator
	};
};