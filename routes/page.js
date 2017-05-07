const express = require('express');
const router = express.Router();
const page = require('../services/page.js');
const marked = require('marked');

// NOT WORKING YET
/*
router.get('/:slug', (req, res, next) => {
	article.getPage(req.params.id).then((page) => {
		req.post = page.fields;
		req.post.content = marked(req.post.content);
		if (req.params.slug == req.post.slug) {
			res.render('page', {
				'page': req.post
			});
		} else {

		}
	}).catch(error => {
		console.log(err);
		var err = new Error(error.message);
		err.status = 400;
		next(err);
	});
});
*/
module.exports = router;