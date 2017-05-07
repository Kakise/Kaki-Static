const express = require('express');
const router = express.Router();
const index = require('../services/index.js');
const marked = require('marked');
let pagination = {};
let postArr = [];
let id;

function execQuery(req, res, next) {
	typeof req.params.id !== 'string' ? id = 1 : id = parseInt(req.params.id);

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
			'articles': postArr,
			'md': marked,
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
			'articles': postArr,
			'md': marked,
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