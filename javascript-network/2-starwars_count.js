const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: node 2-starwars_count.js <API_URL>');
  process.exit(1);
}

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error fetching data from the API:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('Failed to fetch data from the API. Status code:', response.statusCode);
    process.exit(1);
  }

  try {
    const films = JSON.parse(body).results;
    const wedgeAntillesMovies = films.filter(film =>
      film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')
    );

    console.log(wedgeAntillesMovies.length);
  } catch (parseError) {
    console.error('Error parsing API response:', parseError);
    process.exit(1);
  }
});
