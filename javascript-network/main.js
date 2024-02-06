// Another file

const fetchAndCategorizeModule = require('./3-request_store');

const { fetchAndCategorize, urls } = fetchAndCategorizeModule;

// Fetch and categorize content for each URL
urls.forEach((url) => {
  fetchAndCategorize(url);
});
