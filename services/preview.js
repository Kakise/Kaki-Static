const client = require('./contentfulClient.js').client_preview;

function getArticlePreview(id) {
	return client.getEntry(id)
}

module.exports = {
	getArticlePreview
};