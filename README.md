# Maplink Geocoder

Maplink Geocoder is a wrapper for consuming the Maplink Geooding API. The responses are implemented using Bluebird promises.

For further information about the Maplink Geocoding API, please access http://dev.maplink.com.br.

> Maplink Geocoder at this version works only for Brazil

### Sample

For creating an instance of the Maplink Geocoder, you must have a Token or a ClientKey and ClientSecret.

**Instance Initialization**

```javascript
// If you have the token
const geocoder = require ('maplink-geocoder')('<token>');
// or
// if you have the client secret and the key
const geocoder = require ('maplink-geocoder')('<secret>', '<key>');
```

**Geocode** (Structured)

You must pass a JSON in the geocode parameters. For the parameter options, take a look at this [link](http://dev.maplink.com.br/pt/v2/maplinkapi-geocode/).

```javascript
// Structured geocode
geocoder.structured({
    'streetName': 'Rua Fidêncio Ramos',
    'houseNumber': '343',
    'state': 'SP',
    'city': 'São Paulo',
    'country': 'BRA'
  }).then(...).catch(...);
```

**Search** (Free form)

You must pass an address string in the search parameters.

```javascript
// Free form search
geocoder.search('Avenida Paulista').then(...).catch(...);
```

# Roadmap

* Geocode for all Latin America
* Geocode for Europe
* Batch geocode and search
* Normalize responses
