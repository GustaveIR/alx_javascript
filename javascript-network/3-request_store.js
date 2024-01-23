const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/route_0') {
    res.write('Correct output - small text');
  } else if (req.url === '/route_1') {
    res.write('Correct output - big text');
  } else if (req.url === '/route_2') {
    res.write('Correct output - empty text');
  } else {
    res.write('Invalid route');
  }
  res.end();
});

const PORT = 5050;

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
