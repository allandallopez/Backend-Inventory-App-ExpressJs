'use strict';

module.exports = function(app) {
	var todoList = require('../controllers/category');

	app.route('/category').get(todoList.Category);

	app.route('/category/:id').get(todoList.findCategory);

	app.route('/category').post(todoList.createCategory);

	app.route('/category/:id').put(todoList.updateCategory);

	app.route('/category/:id').delete(todoList.deleteCategory);
};
