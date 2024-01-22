const request = require('request');
const fs = require('fs');

if (process.argv.length !== 4) {
  console.error('Usage: node 3-request_store.js <URL> <outputFilePath>');
  process.exit(1);
}

const url = process.argv[2];
const outputPath = process.argv[3];

request(url, { encoding: 'utf-8' }, (error, response, body) => {
  if (error) {
    console.error('Error making the request:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('Failed to fetch data from the URL. Status code:', response.statusCode);
    process.exit(1);
  }

  try {
    fs.writeFileSync(outputPath, body, 'utf-8');
    console.log(`Content successfully stored in ${outputPath}`);
  } catch (writeError) {
    console.error('Error writing to the file:', writeError);
    process.exit(1);
  }
});
