const tap = require('tap');
const request = require('supertest');
const app = require('../app.js');

tap.test('index page', () => {
	request(app).get('/').expect(200, done);
});