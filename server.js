const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const {validate, required} = require('validatex');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", function (req, res) {
    const querySchema = {
        key: required(true, "Please pass a Google key."),
	city: required(true, "Please pass a city name .e.g. sydney.")
    };
    const error = validate(req.query, querySchema);

    if (error) {
        res.send(error);
    }
    else {
        const {key, city} = req.query;
        const options = {
            key: key,
            city: city
        };

        axios.get("https://maps.googleapis.com/maps/api/place/textsearch/json", options)
            .then(response => res.send(response.data))
            .catch(error => res.send(error));
    }
});

app.listen(4000, function () {
  console.log("Proxy server is running at localhost:4000");
});
