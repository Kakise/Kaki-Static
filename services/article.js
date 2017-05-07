const client = require('./contentfulClient.js').client;

function getArticle(id) {
	return client.getEntry(id);
}

module.exports = {
	getArticle
};