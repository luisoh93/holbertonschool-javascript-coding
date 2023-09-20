#!/usr/bin/node

const request = require('request');
const url = `https://swapi-api.alx-tools.com/api/films/${process.argv[2]}`;

request(url, function (err, response, body) {
  if (err) console.log(err);
  JSON.parse(body).characters.map(
    function (characterUrl) {
      request(characterUrl, function (error, response, body) {
        if (error) console.log(error);
        console.log(JSON.parse(body).name);
      });
      return characterUrl;
    }
  );
});
