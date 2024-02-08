const axios = require('axios');
const fs = require('fs');

// Function to fetch content from a URL and categorize based on size
async function fetchAndCategorize(url, expectedContent, urls) {
  try {
    const response = await axios.get(url);

    if (response.status !== 200) {
      console.error('Unexpected status code:', response.status);
      return;
    }

    // Categorize based on the size of the response body
    const size = response.data.length;
    console.log(`Correct output - ${size > 1000 ? 'big' : 'small'} text - ${url}`);

    // Write content to a file if it's not empty
    let fileName = `file_${urls.indexOf(url)}.txt`;

    if (response.data !== null && response.data !== undefined && response.data !== '') {
      fs.writeFileSync(fileName, response.data, 'utf-8');
      console.log(` - [Got]`);

      // Simulate cat command
      const fileContent = fs.readFileSync(fileName, 'utf-8');
      console.log(`(Length: ${fileContent.length} chars long)`);

      // Print expected content only if it is provided
      if (expectedContent !== undefined) {
        console.log(`[Expected]`);
        console.log(expectedContent);
        console.log(`(Length: ${expectedContent.length} chars long)`);
      }
    } else {
      console.error(`[Error]: Empty content for ${url}`);
    }
  } catch (error) {
    console.error('Error making request:', error.message);
  }
}

// URLs to fetch content from
const urls = [
  'http://localhost:5050/route_0',
  'http://loripsum.net/api',  // Loripsum API URL
  'http://localhost:5050/route_2',
];

// Expected content for each URL
const expectedContents = [
  'C is fun!',  // Replace this with your actual expected content for the first URL
  '', // Loripsum API response will be used here
  '', // Empty text
];

// Async function to fetch data
async function fetchData() {
  for (let index = 0; index < urls.length; index++) {
    // For the Loripsum API, make a separate request to get the expected content
    if (index === 1) {
      try {
        const loripsumResponse = await axios.get(urls[index]);
        fileName = `file_${urls.indexOf(urls[index])}.txt`; // Update fileName here
        expectedContents[index] = loripsumResponse.data;
      } catch (error) {
        console.error('Error fetching Loripsum content:', error.message);
      }
    }

    // Fetch and categorize content for the current URL
    await fetchAndCategorize(urls[index], expectedContents[index], urls);
  }
}

// Call the async function
fetchData();
