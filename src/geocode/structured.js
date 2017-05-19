const qs = require('qs'),
  request = require('request-promise'),
  auth = require('../auth')

module.exports = function(auth) {

  return function(query) {

    if (!query) {
      throw new Error('Query object must be informed.')
    }

    let bytelike = unescape(encodeURIComponent(qs.stringify(query)))
    let host = `http://api.maplink.com.br/v0/geocode/geocode?${bytelike}`
    let url = auth.parse(host, {})

    return request(url)
  }
}
