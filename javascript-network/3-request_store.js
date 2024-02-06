const request = require('request');

// Function to fetch content from a URL and categorize based on size
function fetchAndCategorize(url) {
  request(url, (error, response, body) => {
    if (error) {
      console.error('Error making request:', error);
      return;
    }

    if (response.statusCode !== 200) {
      console.error('Unexpected status code:', response.statusCode);
      return;
    }

    // Categorize based on the size of the response body
    const size = body.length;
    if (size > 1000) {
      console.log(`Correct output - small text - ${url}`);
    } else if (size > 0) {
      console.log(`Correct output - big text - ${url}`);
    } else {
      console.log(`Correct output - empty text - ${url}`);
    }
  });
}

// URLs to fetch content from
const urls = [
  'http://localhost:5050/route_0',
  'http://localhost:5050/route_1',
  'http://localhost:5050/route_2',
];

// Export the fetchAndCategorize function and the urls array
export default { fetchAndCategorize, urls };
