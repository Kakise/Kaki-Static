const express = require('express');
const router = express.Router();
const article = require('../services/article.js');
const toRead = require('reading-time');
const marked = require('marked');

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

router.get('/:slug', (req, res, next) => {
	article.getArticle(req.params.slug).then((article) => {
		article = article.items[0];
		article.fields.article = marked(article.fields.article) + disqus(req.params.id);
		article.fields.desc = marked(article.fields.article);
		res.render('article', {
			article: article.fields,
			toRead: Math.trunc(parseInt(toRead(article.fields.article).time, 10) / 60000), // Return an estimation in minutes
			version: require("../package.json").version
		});
	}).catch(error => {
		const err = new Error(error.message);
		err.status = 404;
		next(err);
	});
});

module.exports = router;
