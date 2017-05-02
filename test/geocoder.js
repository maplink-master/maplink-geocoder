module.exports = (clientKey = '', clientSecret = '') => {
  if(clientKey.length === 0 && clientSecret.length === 0){
    throw new Error('You must to send clientKey and clientSecret.');
  };
  return {
    clientKey: clientKey,
    clientSecret: clientSecret
  };
};
