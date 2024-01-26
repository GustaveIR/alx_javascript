const request = require('request');
const fs = require('fs');

if (process.argv.length !== 4) {
  console.error('Usage: node 3-request_store.js <URL> <FilePath>');
  process.exit(1);
}

const url = process.argv[2];
const filePath = process.argv[3];

request({
  url: url,
  encoding: 'utf-8',
  followRedirect: true // Follow redirects
}, (error, response, body) => {
  if (error) {
    console.error('Error making the request:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('Failed to fetch data from the URL. Status code:', response.statusCode);
    process.exit(1);
  }

  // Write the body content to the specified file
  fs.writeFile(filePath, body, 'utf-8', (err) => {
    if (err) {
      console.error('Error writing to the file:', err);
      process.exit(1);
    }

    console.log(`Content successfully written to ${filePath}`);
  });
});
