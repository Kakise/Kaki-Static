const client = require('./contentfulClient.js').client;

function getPage(id) {
	return client.getEntry(id)
}

module.exports = {
	getPage
};