'use strict';

module.exports = function(app) {
	var todoList = require('../controllers/product');
	const jwt = require('../middleware/jwt');

	app.route('/').get(todoList.Index);
	app.route('/products').get(todoList.getAllProducts);
	app.route('/products/:id').get(todoList.findProducts);
	app.route('/products').post(jwt.verifyToken, todoList.createProducts);
	app.route('/products/quantity/').patch(jwt.verifyToken, todoList.addReduce);
	app.route('/products/:id').put(jwt.verifyToken, todoList.updateProducts);
	app.route('/products/:id').delete(jwt.verifyToken, todoList.deleteProducts);
};
