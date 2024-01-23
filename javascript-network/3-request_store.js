const request = require('request');
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/route_0') {
    // Fetch content from the specified URL for small text
    fetchContent('http://loripsum.net/api', (content) => {
      res.write(content);
      res.end();
    });
  } else if (req.url === '/route_1') {
    // Fetch content from the specified URL for big text
    fetchContent('http://loripsum.net/api/100/long', (content) => {
      res.write(content);
      res.end();
    });
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

const PORT = 5051;

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

function fetchContent(url, callback) {
  request(url, { encoding: 'utf-8' }, (error, response, body) => {
    if (error) {
      console.error('Error making the request:', error);
      process.exit(1);
    }

    if (response.statusCode !== 200) {
      console.error('Failed to fetch data from the URL. Status code:', response.statusCode);
      process.exit(1);
    }

    callback(body);
  });
}
