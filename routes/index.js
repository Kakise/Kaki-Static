const express = require('express');
const router = express.Router();
const index = require('../services/index.js');
const marked = require('marked');
const toRead = require('reading-time');
const i18n = require('intl');
Intl.DateTimeFormat = i18n.DateTimeFormat;
let pagination = {};
let postArr = [];
let id;

// Middleware
function execQuery(req, res, next) {
	typeof req.params.id !== 'string' ? id = 1 : id = parseInt(req.params.id, 10);

	// Get the article list
	index.listArticles({
		content_type: 'blogPost',
		order: '-fields.date',
		skip: 5 * (id - 1),
		limit: 5 * id
	}).then(list => {
		//Pagination
		pagination = {
			id,
			max: Math.trunc(list.total / 5) + 1
		};
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

router.get('/', execQuery, (req, res, next) => {
	// Error handler
	if (id > pagination.max) {
		const err = new Error("Page not found");
		err.status = 404;
		next(err);
	} else {
		res.render('index', {
			articles: postArr,
			md: marked,
			version: require("../package.json").version,
			pagination: {
				id: 1,
				max: pagination.max,
				preced: 0,
				precedNext: 0,
				next: 1 != pagination.max ? 1 : 0
			}
		});
	}

});

router.get('/:id', execQuery, (req, res, next) => {
	// Error handler
	if (id > pagination.max) {
		const err = new Error("Page not found");
		err.status = 404;
		next(err);
	} else {
		res.render('index', {
			articles: postArr,
			md: marked,
			version: require("../package.json").version,
			pagination: {
				id: pagination.id,
				max: pagination.max,
				preced: pagination.max == id ? 1 : 0,
				precedNext: pagination.max > id && id != 1 ? 1 : 0,
				next: (id == 1 && id != pagination.max) ? 1 : 0
			}
		});
	}
});

module.exports = router;