#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];
const characterId = 18;

request(apiUrl, function (error, response, body) {
  if (error) {
    console.error(error.message);
    return;
  }

  if (response.statusCode === 200) {
    const filmsData = JSON.parse(body);
    const moviesWithWedgeAntilles = filmsData.results.filter(film =>
      film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
    );

    console.log(moviesWithWedgeAntilles.length);
  } else {
    console.error(`Error: Status Code ${response.statusCode}`);
  }
});
