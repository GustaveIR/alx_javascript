const request = require('request');
const fs = require('fs');

// Function to fetch content from a URL and categorize based on size
function fetchAndCategorize(url, expectedContent) {
  request(url, (error, response, body) => {
    if (error) {
      console.error('Error making request:', error);
      return;
    }

    if (response.statusCode !== 200) {
      console.error('Unexpected status code:', response.statusCode);
      return;
    }

    // Categorize based on the size of the response body
    const size = body.length;
    console.log(`Correct output - ${size > 1000 ? 'big' : 'small'} text - ${url}`);
    
    // Write content to a file
    const fileName = `file_${urls.indexOf(url)}`;
    fs.writeFile(fileName, body, 'utf-8', (writeError) => {
      if (writeError) {
        console.error('Error writing to file:', writeError);
        return;
      }
      console.log(` - [Got]`);
      
      // Simulate cat command
      fs.readFile(fileName, 'utf-8', (readError, fileContent) => {
        if (readError) {
          console.error(`[stderr]: cat: ${fileName}: ${readError.code === 'ENOENT' ? 'No such file or directory' : readError.message}`);
          return;
        }
        console.log(`(Length: ${fileContent.length} chars long)`);
        console.log(`[Expected]`);
        console.log(expectedContent);
        console.log(`(Length: ${expectedContent.length} chars long)`);
      });
    });
  });
}

// URLs to fetch content from
const urls = [
  'http://localhost:5050/route_0',
  'http://localhost:5050/route_1',
  'http://localhost:5050/route_2',
];

// Expected content for each URL
const expectedContents = [
  'C is fun!',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...', // Replace with the actual expected content
  '', // Empty text
];

// Fetch and categorize content for each URL
urls.forEach((url, index) => {
  fetchAndCategorize(url, expectedContents[index]);
});
