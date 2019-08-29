'use strict';

module.exports = function(app) {
	var todoList = require('../controllers/user');

	app.route('/').get(todoList.home);
	app.route('/login').post(todoList.login);
	app.route('/register').post(todoList.register);
	app.route('*').get(todoList.notFound);
};
