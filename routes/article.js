const express = require('express');
const router = express.Router();
const article = require('../services/article.js');
const toRead = require('reading-time');
const marked = require('marked');
const PlainTextRenderer = require('marked-plaintext');
const renderer = new PlainTextRenderer();

function disqus(id) {
	if (typeof process.env.disqus !== "undefined")
		return `
	    <div id="disqus_thread"></div>
	    <script>
	    	var disqus_config = function () {
				this.page.url = window.location.href;
				this.page.identifier = '${id}';
			};
	        (function() { // DON'T EDIT BELOW THIS LINE
	            var d = document, s = d.createElement('script');
	            s.src = 'https://${process.env.disqus}.disqus.com/embed.js';
	            s.setAttribute('data-timestamp', +new Date());
	            (d.head || d.body).appendChild(s);
	        })();
	    </script>`;
}

router.get('/:id/:slug', (req, res, next) => {
	article.getArticle(req.params.id).then((article) => {
		req.post = article.fields;
		req.post.article = marked(req.post.article) + disqus(req.params.id);
		req.post.desc = marked(req.post.article, {
			renderer: renderer
		});
		if (req.params.slug == req.post.slug) {
			res.render('article', {
				article: req.post,
				toRead: Math.trunc(parseInt(toRead(article.fields.article).time, 10) / 60000) - 1, // Return an estimation in minutes
				version: require("../package.json").version
			});
		} else {
			const err = new Error("Article not found!");
			err.status = 404;
			next(err);
		}
	}).catch(error => {
		const err = new Error(error.message);
		err.status = 400;
		next(err);
	});
});

module.exports = router;
