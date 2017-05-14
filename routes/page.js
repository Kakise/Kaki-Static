const express = require('express');
const router = express.Router();
const page = require('../services/page.js');
const marked = require('marked');

router.get('/:slug', (req, res, next) => {
	page.getPage(req.params.slug).then((page) => {
		req.post = page.items[0].fields;
		req.post.content = marked(req.post.content);
		res.render('page', {
			page: req.post,
			version: require("../package.json").version
		});
	}).catch(error => {
		var err = new Error(error.message);
		err.status = 400;
		next(err);
	});
});

module.exports = router;
