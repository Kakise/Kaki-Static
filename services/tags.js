const client = require('./contentfulClient.js').client;


function listTags(tag) {
	query = {
		content_type: 'blogPost',
		order: '-fields.date',
		'fields.tags': tag
	};
	return client.getEntries(query)
}

module.exports = {
	listTags
};