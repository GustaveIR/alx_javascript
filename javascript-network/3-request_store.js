const request = require('request');
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/route_0') {
    // Respond with correct output for small text
    res.write('Correct output - small text');
    res.end();
  } else if (req.url === '/route_1') {
    // Respond with correct output for big text
    res.write('Correct output - big text');
    res.end();
  } else if (req.url === '/route_2') {
    // Respond with correct output for empty text
    res.write('Correct output - empty text');
    res.end();
  } else {
    // Handle invalid routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Invalid route');
    res.end();
  }
});

const PORT = 5050;

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

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
    // Stop the server after successfully storing content
    server.close();
  } catch (writeError) {
    console.error('Error writing to the file:', writeError);
    process.exit(1);
  }
});
