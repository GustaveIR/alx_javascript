const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

if (!url || !filePath) {
  console.error('Please provide both the URL and file path as arguments.');
  process.exit(1);
}

request(url, (error, response, body) => {
  if (error) {
    console.error('Error making request:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('Unexpected status code:', response.statusCode);
    process.exit(1);
  }

  fs.writeFileSync(filePath, body, 'utf-8');
  console.log(`Content successfully written to ${filePath}`);
});
