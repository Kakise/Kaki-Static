const contentful = require('contentful');

// Contentful.com's API keys
const SpaceID = process.env.SpaceID;
const ContentDeliveryAPI = process.env.CDApi;
const ContentPreviewAPI = process.env.CPApi;

const client = contentful.createClient({
	accessToken: ContentDeliveryAPI,
	space: SpaceID
});

const client_preview = contentful.createClient({
	accessToken: ContentPreviewAPI,
	space: SpaceID,
	host: 'preview.contentful.com'
});

module.exports = {
	client,
	client_preview
};