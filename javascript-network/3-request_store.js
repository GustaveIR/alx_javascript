const axios = require('axios');
const fs = require('fs').promises;

async function processURL(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return `Error: ${error.message}`;
  }
}

async function storeContent(url, filePath) {
  const content = await processURL(url);

  try {
    await fs.writeFile(filePath, content, 'utf-8');
    console.log(`Content successfully written to ${filePath} for ${url}`);
  } catch (error) {
    console.error(`Error writing to ${filePath}: ${error.message}`);
  }
}

// Check if command-line arguments are provided
if (process.argv.length !== 4) {
  console.error('Usage: node 3-request_store.js <URL> <FilePath>');
  process.exit(1);
}

const url = process.argv[2];
const filePath = process.argv[3];

storeContent(url, filePath);
