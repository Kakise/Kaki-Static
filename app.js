const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');
const favicon = require('serve-favicon');
const index = require('./routes/index.js');
const article = require('./routes/article.js');
const page = require('./routes/page.js');
const preview = require('./routes/preview.js');
const minify = require('express-minify');
const enforce = require('express-sslify');
const client = require('./services/contentfulClient.js').client;
const throng = require('throng');

// Useful vars
const port = (parseInt(process.env.PORT) + 1).toString();
const WORKERS = process.env.WORKERS || 1;

// Proxy Server
const httpProxy = require('http-proxy');

const apiProxy = httpProxy.createProxyServer();
const proxy = express();

// TODO: Dynamic proxying using Contentful
client.getEntries({
	content_type: 'reverseProxy'
}).then((list) => {
	list.items.forEach((prox) => {
		console.log('Added proxy: ', prox.fields.log, '=: ', proxy.fields.origine, 'to: ', proxy.fields.cible);
		proxy.all(`${prox.fields.origine}/*`, (req, res) => {
			console.log(`Bridge to ${prox.fields.log}`);
			apiProxy.web(req, res, {
				target: `http://${prox.fields.cible}`
			});
		});
	});
});

proxy.all("/*", (req, res) => {
	console.log('Bridge to server');
	apiProxy.web(req, res, {
		target: `http://localhost:${port}`
	});
});

proxy.on('error', (err, req, res) => {
	res.writeHead(500, {
		'Content-Type': 'text/plain'
	});
	res.end(`An error happened while proxying: ${err}`);
});

const app = express();

process.env.DYNO !== "" ? app.use(enforce.HTTPS({
	trustProtoHeader: true
})) : app.use(enforce.HTTPS());

throng({
	workers: WORKERS,
	lifetime: 60000,
	start: startFn
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('view cache', true);
app.set('port', (process.env.PORT || 5000));
app.use(favicon(path.join(__dirname, 'public/favicon.ico')));
app.use(helmet()); // protect = well known vulnerabilities
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(cookieParser());
app.use(compression());
app.use(minify());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/article', article);
app.use('/page', page);
app.use('/preview', preview);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (process.env.NODE_ENV === 'development') {
	app.use(logger('dev'));
	app.use((err, req, res, next) => {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
if (process.env.NODE_ENV === 'production') {
	app.use(logger('dev'));
	app.use((err, req, res, next) => {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: {}
		});
	});
}
console.log('Node app is running on port', port);

function startFn(id) {
	app.listen(port, () => {
		console.log('[SERVER] Worker: ', id, ' started');
	});
	proxy.listen(process.env.PORT, () => {
		console.log('[PROXY] Worker: ', id, ' started');
	});
}

module.exports = app;