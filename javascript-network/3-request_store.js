const axios = require('axios');
const fs = require('fs');

const baseURL = 'http://localhost:5050/';

const routes = ['route_0', 'route_1', 'route_2'];

const fetchDataAndStoreToFile = async (route) => {
  try {
    const url = baseURL + route;
    const response = await axios.get(url, { responseType: 'text' });

    const filePath = `file_${routes.indexOf(route)}.txt`;

    // Append the body content to the specified file
    fs.appendFileSync(filePath, response.data + '\n', 'utf-8');

    console.log(`Content successfully written to ${filePath} for ${url}`);
  } catch (error) {
    console.error(`Error making the request for ${route}:`, error.message);
  }
};

// Process each route
routes.forEach((route) => {
  fetchDataAndStoreToFile(route);
});
