const axios = require('axios');
const fs = require('fs');

if (process.argv.length < 4) {
  console.error('Usage: node 3-request_store.js <URL1> <URL2> ... <URLn> <FilePath>');
  process.exit(1);
}

const filePath = process.argv[process.argv.length - 1];
const urls = process.argv.slice(2, -1);

const processURL = async (url) => {
  try {
    const response = await axios.get(url, { responseType: 'text' });

    // Append the body content to the specified file
    fs.appendFileSync(filePath, response.data + '\n', 'utf-8');

    console.log(`Content successfully written to ${filePath} for ${url}`);
  } catch (error) {
    console.error(`Error making the request for ${url}:`, error.message);
  }
};

// Process each URL
urls.forEach((url) => {
  processURL(url);
});
