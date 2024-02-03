const request = require('request');

const movieId = process.argv[2];

if (!movieId) {
  console.error('Please provide the Movie ID as the first argument.');
  process.exit(1);
}

const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error making request:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('Unexpected status code:', response.statusCode);
    process.exit(1);
  }

  const movie = JSON.parse(body);

  console.log(movie.title);

  movie.characters.forEach((characterUrl) => {
    request(characterUrl, (error, response, characterBody) => {
      if (error) {
        console.error('Error making character request:', error);
        process.exit(1);
      }

      if (response.statusCode !== 200) {
        console.error('Unexpected status code for character:', response.statusCode);
        process.exit(1);
      }

      const character = JSON.parse(characterBody);
      console.log(character.name);
    });
  });
});
