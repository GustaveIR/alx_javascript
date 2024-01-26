const request = require('request');
const fs = require('fs');

// Check if enough arguments are provided
if (process.argv.length < 4) {
  console.error('Usage: node 3-request_store.js <URL1> <URL2> ... <URLn> <FilePath>');
  process.exit(1);
}

// Extract the file path from the last argument
const filePath = process.argv[process.argv.length - 1];

// Extract all URLs except the last argument (which is the file path)
const urls = process.argv.slice(2, -1);

// Function to handle request and file writing for each URL
const processURL = (url) => {
  request({
    url: url,
    encoding: 'utf-8',
    followRedirect: true
  }, (error, response, body) => {
    if (error) {
      console.error(`Error making the request for ${url}:`, error);
      return;
    }

    if (response.statusCode !== 200) {
      console.error(`Failed to fetch data from ${url}. Status code:`, response.statusCode);
      return;
    }

    // Write the body content to the specified file
    fs.writeFile(filePath, body, 'utf-8', (err) => {
      if (err) {
        console.error(`Error writing to the file for ${url}:`, err);
        return;
      }

      console.log(`Content successfully written to ${filePath} for ${url}`);
    });
  });
};

// Process each URL
urls.forEach((url) => {
  processURL(url);
});
