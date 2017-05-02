const geocoder = require ('./src/geocoder/index.js');
try {
  let geo = geocoder('userlbs', 'dxOBQD3pblVAzxOAzTVsynO8dxOLcMkIcDkBclZLcIOsyIZm');
  console.log(geo);
} catch (e) {
}
