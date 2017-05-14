const client = require('./contentfulClient.js').client;

function getArticle(slug) {
	const query = {  
		content_type: 'blogPost',
  		'fields.slug': slug
	};
	return client.getEntries(query);
}

module.exports = {
	getArticle
};
