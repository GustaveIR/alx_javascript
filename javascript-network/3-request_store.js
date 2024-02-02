const axios = require('axios');
const fs = require('fs').promises;

async function processURL(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching content from ${url}: ${error.message}`);
    return ''; // Return an empty string in case of an error
  }
}

async function storeContent(url, filePath) {
  const content = await processURL(url);

  // Remove HTML tags from content
  const textContent = content.replace(/<[^>]*>/g, '');

  try {
    await fs.writeFile(filePath, textContent, 'utf-8');
    console.log(`Content successfully written to ${filePath} for ${url}`);
  } catch (error) {
    console.error(`Error writing to ${filePath}: ${error.message}`);
  }
}

// Example usage:
const url = process.argv[2]; // Get URL from command line arguments
const filePath = process.argv[3]; // Get file path from command line arguments

if (!url || !filePath) {
  console.error('Usage: node 3-request_store.js <URL> <FilePath>');
} else {
  storeContent(url, filePath);
}
