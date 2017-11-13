## Introduction
A proxy server to by pass CORS issues at [Google place API](https://developers.google.com/places/web-service/search).

## Requirements
### 1. Node v6.11.4 or above

## Installation
### 1. Clone this repo
`$ git clone git@github.com:brandsExclusive/test-api-earth-page.git`

### 2. Install dependencies
`$ npm install` or `$ yarn`

## Usage
### 1. Run server
`node server.js`

### 2. Consume API
Before one can consume the API, please get an API key from [here](https://developers.google.com/places/web-service/search).
#### Request signature
```
url: http://localhost:4000/
params:
    - key: <Google key> // Visit https://developers.google.com/places/web-service/search
    - city: <city name>

```

Example

```
const options = {
    params: {
    	key: <Google key> // replace this with your own Google API key.
	city: "sydney"
    }
};

axios.get("http://localhost:4000", options)
    .then(/* ... */ )
    .catch(/* ... */);
```

#### Response
The API simply forwards whatever Google API responses.
See [this](https://developers.google.com/places/web-service/search#PlaceSearchResponses) for response signature.
