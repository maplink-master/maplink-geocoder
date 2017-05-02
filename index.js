const geocoder = require ("./src/geocoder/index.js");
try {
	let geo = geocoder("userlbs", "dxOBQD3pblVAzxOAzTVsynO8dxOLcMkIcDkBclZLcIOsyIZm");
	geo.tokenGenerator("http://api.maplink.com.br/v0/search?q=rio de janeiro");
	console.log(geo);
} catch (e) {
	console.error(e);
}
