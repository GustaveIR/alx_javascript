const axios = require('axios');
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
const processURL = async (url) => {
  try {
    const response = await axios.get(url, { responseType: 'text' });

    // Write the body content to the specified file
    fs.writeFileSync(filePath, response.data, 'utf-8');

    console.log(`Content successfully written to ${filePath} for ${url}`);
  } catch (error) {
    console.error(`Error making the request for ${url}:`, error.message);
  }
};

// Process each URL
urls.forEach((url) => {
  processURL(url);
});
