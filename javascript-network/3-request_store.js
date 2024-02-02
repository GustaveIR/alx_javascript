// 3-request_store.js

// Import the axios library
const axios = require('axios');
const fs = require('fs/promises');

// Function to process the URL and store the response in a file
async function processURL(url, filePath) {
  try {
    // Make a GET request to the specified URL
    const response = await axios.get(url);

    // Extract the response content
    const content = response.data;

    // Write the content to the specified file path
    await fs.writeFile(filePath, content, 'utf-8');

    console.log(`Content successfully written to ${filePath} for ${url}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

// Get command-line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Check if both URL and file path are provided
if (url && filePath) {
  // Call the processURL function with the provided URL and file path
  processURL(url, filePath);
} else {
  // Display usage information if arguments are missing
  console.error('Usage: node 3-request_store.js <URL> <FilePath>');
}
