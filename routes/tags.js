const express = require('express');
const router = express.Router();
const tags = require('../services/tags.js');
const marked = require('marked');
const toRead = require('reading-time');
const i18n = require('intl');
Intl.DateTimeFormat = i18n.DateTimeFormat;
let postArr = [];

// Middleware
function execQuery(req, res, next) {
	// Get the article list
	tags.listTags(req.params.tag).then(list => {
		postArr = list.items;
		postArr.forEach(article => {
			article.toRead = Math.trunc(parseInt(toRead(article.fields.article).time, 10) / 60000); // Return an estimation in minutes
			article.fields.date = new Intl.DateTimeFormat(process.env.LANG, {
				weekday: "long",
				year: "numeric",
				month: "long",
				day: "numeric",
				hour: "numeric",
				minute: "numeric"
			}).format(new Date(article.fields.date));
			article.fields.date = article.fields.date.charAt(0).toUpperCase() + article.fields.date.slice(1); // Force the first letter to be capitalized
		});
		next();
	}).catch(error => {
		const err = new Error(error.message);
		err.status = 400;
		next(err);
	});

}

router.get('/:tag', execQuery, (req, res, next) => {
	// Error handler
	res.render('tags', {
		articles: postArr,
		md: marked,
		version: require("../package.json").version,
		tag: req.params.tag
	});
});

module.exports = router;