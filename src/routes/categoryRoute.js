'use strict';

module.exports = function(app) {
	var todoList = require('../controllers/category');
	const jwt = require('../middleware/jwt');

	app.route('/category').get(todoList.Category);

	app.route('/category/:id').get(todoList.findCategory);

	app.route('/category').post(jwt.verifyToken, todoList.createCategory);

	app.route('/category/:id').put(jwt.verifyToken, todoList.updateCategory);

	app.route('/category/:id').delete(jwt.verifyToken, todoList.deleteCategory);
};
