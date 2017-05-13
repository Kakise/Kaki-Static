const client = require('./contentfulClient.js').client;

function getArticle(query) {
	query = query || {};
	return client.getEntries(query);
}

module.exports = {
	getArticle
};
