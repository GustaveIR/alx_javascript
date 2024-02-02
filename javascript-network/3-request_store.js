const axios = require('axios');
const fs = require('fs/promises');

if (process.argv.length !== 3) {
  console.error('Usage: node 3-request_store.js <FilePath>');
  process.exit(1);
}

const filePath = process.argv[2];

const urls = [
  'http://localhost:5050/route_0',
  'http://localhost:5050/route_1',
  'http://localhost:5050/route_2',
];

const processURL = async (url) => {
  try {
    const response = await axios.get(url);
    await fs.appendFile(filePath, response.data, 'utf-8');
    console.log(`Content successfully written to ${filePath} for ${url}`);
  } catch (error) {
    console.error(`Error making the request for ${url}:`, error.message);
  }
};

// Process each URL asynchronously
const processAllURLs = async () => {
  for (const url of urls) {
    await processURL(url);
  }

  // Add a newline at the end of the file
  await fs.appendFile(filePath, '\n', 'utf-8');
};

// Call the asynchronous function
processAllURLs();
