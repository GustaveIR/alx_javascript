const axios = require('axios');
const fs = require('fs');

if (process.argv.length !== 4) {
  console.error('Usage: node 3-request_store.js <URL> <FilePath>');
  process.exit(1);
}

const url = process.argv[2];
const filePath = process.argv[3];

const processURL = async (url) => {
  try {
    const response = await axios.get(url, { responseType: 'text' });
    fs.appendFileSync(filePath, response.data + '\n', 'utf-8');
    console.log(`Content successfully written to ${filePath} for ${url}`);
  } catch (error) {
    console.error(`Error making the request for ${url}:`, error.message);
  }
};

// Process the specified URL
processURL(url);
