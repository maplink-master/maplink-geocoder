const request = require('request-promise');
  //auth = require('../auth');

module.exports = function(auth) {

  return function(query) {

    if (!query) {
      throw new Error('Address must be informed');
    }
    else if (typeof query !== 'string') {
      throw new Error('The argument must be a string');
    }

    let bytelike = unescape(encodeURIComponent(query));
    let host = `http://api.maplink.com.br/v0/search?q=${bytelike}`;
    let url = auth.parse(host, {});

    return request(url);
  };
};
