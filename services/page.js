const client = require('./contentfulClient.js').client;

function getPage(slug) {
	const query = {
		content_type: 'page',
		'fields.slug': slug
	};
	return client.getEntries(query)
}

module.exports = {
	getPage
};
