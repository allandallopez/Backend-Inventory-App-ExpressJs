'use strict';

var response = require('../res');
var connection = require('../configs/db');

exports.Category = function(req, res) {
	connection.query('SELECT * FROM category', function(err, results, fields) {
		if (err) {
			console.log(err);
		} else {
			res.status(200).json({
				status: 200,
				error: false,
				message: 'Successfully get all category data!',
				data: results
			});
		}
	});
};

exports.findCategory = function(req, res) {
	connection.query('SELECT * FROM category WHERE id = ?', req.params.id, function(err, results, fields) {
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
	});
};

exports.createCategory = function(req, res) {
	const { name } = req.body;
	connection.query('INSERT INTO category (name) values (?)', [ name ], function(err, results) {
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
				message: 'Successfully add new category data!',
				data: req.body
			});
		}
	});
};

exports.updateCategory = function(req, res) {
	const { name } = req.body;

	if (!name) {
		res.status(300).json({
			status: 300,
			error: true,
			message: 'name needed for update!'
		});
	} else {
		connection.query('UPDATE category SET name = ? where id = ?', [ name, req.params.id ], function(err, results) {
			if (err) {
				console.log(err);
			} else {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Successfully update category data with id: ' + req.params.id,
					data: req.body
				});
			}
		});
	}
};

exports.deleteCategory = function(req, res) {
	connection.query('DELETE from category WHERE id = ?', [ req.params.id ], function(err, results) {
		if (err) {
			console.log(err);
		} else {
			if (results.affectedRows > 0) {
				res.status(200).json({
					status: 200,
					error: false,
					message: 'Successfully delete category data with id: ' + req.params.id
				});
			} else {
				res.status(400).json({
					status: 400,
					error: true,
					message: 'Cannot delete category data with id: ' + req.params.id
				});
			}
		}
	});
};
