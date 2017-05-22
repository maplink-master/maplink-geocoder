const url = require("url"),
  crypto = require("crypto")

function requestSigner( completeUrl, applicationCode, secretkey, body ){

    let parsedUrl = url.parse( completeUrl )
    let signatureElements = `${parsedUrl.path}&applicationCode=${applicationCode}`;

    if (body) {
      signatureElements += body
    }

    let usablePrivateKey = secretkey.replace( "-", "+" ).replace( "_", "/" )
    let privateKeyBuffer = new Buffer( usablePrivateKey, 'base64' )
    let pathAndQueryBuffer = new Buffer( signatureElements, 'utf8' )
    let hash = crypto.createHmac( 'sha1', privateKeyBuffer ).update( pathAndQueryBuffer ).digest( 'base64' )
    let signature = hash.replace( "+", "-" ).replace( "/", "_" )

    return signature
}

function generate(uri, body, credentials) {

	if (credentials.clientSecret && !credentials.clientKey) {
		return `${uri}&token=${credentials.clientSecret}`
	}

	let signature = requestSigner(uri, credentials.clientKey, credentials.clientSecret)

	return `${uri}&applicationCode=${credentials.clientKey}&signature=${signature}`
}

module.exports = function(clientSecret, clientKey) {

	this.clientSecret = clientSecret
	this.clientKey = clientKey

	return {
		parse: (uri, body) => generate(uri, body, this)
	}
}
