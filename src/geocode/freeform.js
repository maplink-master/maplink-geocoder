const request = require('request-promise')
const auth = require('../auth')

module.exports = function(auth) {

  return function(address) {

    let bytelike = unescape(encodeURIComponent(address))
    let host = `http://api.maplink.com.br/v0/search?q=${bytelike}`
    let token = auth.generator(host, {})

    host += `&token=${token}`

    return request(host)
  }
}
