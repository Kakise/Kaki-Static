const express = require('express');
const router = express.Router();
const article = require('../services/preview.js');
const marked = require('marked');

router.get('/:id', (req, res, next) => {
	article.getArticlePreview(req.params.id).then((article) => {
		req.post = article.fields;
		req.post.article = marked(req.post.article);
		res.render('article', {
			article: req.post,
			preview: 1
		});

	}).catch(error => {
		const err = new Error(error.message);
		err.status = 400;
		next(err);
	});
});

module.exports = router;