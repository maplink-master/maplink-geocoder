const geocoderFullAuth = require ("./src")("dxOBQD3pblVAzxOAzTVsynO8dxOLcMkIcDkBclZLcIOsyIZm", "userlbs");
const geocoderAuth = require ("./src")("NGKiNG2iNJUkNIUkOGoBNXoAOj==");

geocoderFullAuth.freeform('rua fidencio ramos').then(console.log).catch(error => console.log('freeform error'))
geocoderAuth.freeform('rua fidencio ramos').then(console.log).catch(error => console.log('freeform error'))
