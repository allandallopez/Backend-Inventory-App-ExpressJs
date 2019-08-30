'use strict';

var response = require('../res');
var connection = require('../configs/db');

exports.Products = function(req, res) {
	connection.query('SELECT * from products', function(err, results, fields) {
		if (err) {
			console.log(err);
		} else {
			res.status(200).json({
				status: 200,
				error: false,
				message: 'Successfully get all products data!',
				data: results
			});
		}
	});
};

exports.getAllProducts = function(req, res) {
	var sort = req.query.sort || 'ASC';
	var sortBy = req.params.sortBy || 'id';
	var limit = req.query.limit || 3;
	var page = (req.query.page - 1) * limit || 0;
	const search = `%${req.query.search}%`;
	var query =
		'SELECT products.id, products.name, description, image, category.name as category, quantity, date_added, date_update FROM products INNER JOIN category on category.id = products.id_category ';

	if (req.query.search) {
		connection.query(
			query + `WHERE products.name LIKE ?` + ` ORDER BY ${sortBy} ${sort} LIMIT ${page}, ${limit}`,
			search,
			function(err, results) {
				if (err) {
					console.log(err);
				} else {
					res.status(200).json({
						status: 200,
						error: false,
						message: 'Successfully get products data!',
						data: results
					});
				}
			}
		);
	} else {
		connection.query(query + `ORDER BY ${sortBy} ${sort} LIMIT ${page}, ${limit}`, function(err, results) {
			if (err) {
				console.log(err);
			} else {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Successfully get all products data!',
					data: results
				});
			}
		});
	}
};

exports.findProducts = function(req, res) {
	connection.query(
		'SELECT id, name, description, image, (select name from category where products.id_category = category.id) as category, quantity, date_added, date_update from products WHERE id = ?',
		req.params.id,
		function(err, results, fields) {
			if (err) {
				console.log(err);
			} else {
				if (results.length > 0) {
					res.status(200).json({
						status: 200,
						error: false,
						message: 'Successfully get single data!',
						data: results
					});
				} else {
					res.status(400).json({
						status: 400,
						error: true,
						message: 'No data found!',
						data: results
					});
				}
			}
		}
	);
};

exports.createProducts = function(req, res) {
	const { name, description, image, id_category, quantity } = req.body;
	const date = new Date()

	if (!name || !description || !image || !id_category || !quantity) {
		res.status(300).json({
			status: 300,
			error: true,
			message: 'The values cant be null!'
		});
	} else {connection.query(
		'INSERT INTO products (name, description, image, id_category, quantity, date_added, date_update) values (?, ?, ?, ?, ?, ?, ?)',
		[ name, description, image, id_category, quantity, date , date ],
		function(err, results) {
			if (err) {
				console.log(err);
				res.status(400).json({
					status: 400,
					message: 'Error add new data!'
				});
			} else {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Successfully add new product data!',
					data: req.body
				});
			}
		}
	);
	}
};



exports.updateProducts = function(req, res) {
	const { name, description, image, id_category, quantity, date } = req.body;

	if (!name || !description || !image || !id_category || !quantity) {
		res.status(300).json({
			status: 300,
			error: true,
			message: 'field needed for update!'
		});
	} else {
		connection.query(
			'UPDATE products SET name = ?, description = ?, image = ?, id_category = ?, quantity = ?, date_update = ? where id = ?',
			[ name, description, image, id_category, quantity, date, req.params.id ],
			function(err, results) {
				if (err) {
					console.log(err);
				} else {
					res.status(200).json({
						status: 200,
						error: false,
						message: 'Successfully update product data with id: ' + req.params.id,
						data: req.body
					});
				}
			}
		);
	}
};

exports.deleteProducts = function(req, res) {
	connection.query('DELETE from products WHERE id = ?', [ req.params.id ], function(err, results) {
		if (err) {
			console.log(err);
		} else {
			if (results.affectedRows > 0) {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Successfully delete product data with id: ' + req.params.id
				});
			} else {
				res.status(400).json({
					status: 400,
					error: true,
					message: 'Data with ID : ' + req.params.id + 'Not Founds'
				});
			}
		}
	});
};

exports.addReduce = function(req, res) {
	const id = req.body.id;
	const act = req.body.act;
	const value = req.body.value;

	if (act == 'add') {
		var query = `UPDATE products SET quantity = quantity+${value} WHERE +${id}`;
	} else if (act == 'reduce') {
		var query = `UPDATE products SET quantity = quantity-${value} WHERE +${id} AND quantity >= ${value}`;
	}
	connection.query(query, [ req.params.id ], function(err, results) {
		if (err) {
			console.log(err);
		} else {
			if (results.affectedRows == 0) {
				res.status(350).json({
					status: 350,
					error: true,
					message: 'Value cannot be lass then quantity in database: ' + req.body.id,
					data: results
				});
			} else {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Succesfully change quantity with id:' + req.body.id
				});
			}
		}
	});
};

exports.Index = function(req, res) {
	response.ok('Hello Jonna! welcome home!', res);
};

exports.notFound = function(req, res) {
	res.send('404 Not Found!');
};
