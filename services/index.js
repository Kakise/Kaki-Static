const client = require('./contentfulClient.js').client;


function listArticles(query = {}) {
	return client.getEntries(query)
}

module.exports = {
	listArticles
};