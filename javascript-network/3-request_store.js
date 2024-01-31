const axios = require('axios');
const fs = require('fs');

if (process.argv.length !== 4) {
  console.error('Usage: node 3-request_store.js <URL> <FilePath>');
  process.exit(1);
}

const url = process.argv[2];
const filePath = process.argv[3];

const fetchDataAndStoreToFile = async () => {
  try {
    const response = await axios.get(url, { responseType: 'text' });

    // Write the body content to the specified file
    fs.writeFileSync(filePath, response.data, 'utf-8');

    console.log(`Content successfully written to ${filePath}`);
  } catch (error) {
    console.error(`Error making the request:`, error.message);
  }
};

fetchDataAndStoreToFile();
