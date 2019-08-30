'use strict';
require('dotenv').config();

var response = require('../res');
var connection = require('../configs/db');
const express = require('express');
const jwt = require('jsonwebtoken');

exports.home = function(req, res) {
	response.ok('Hello Jonna! welcome home! Pls Login', res);
};

exports.notFound = function(req, res) {
	res.send('404 Not Found!');
};

exports.login = function(req, res) {
	const email = req.body.email;
	const password = req.body.password;
	connection.query('SELECT * FROM users WHERE email = ?', email, function(errors, results, fields) {
		if (errors) {
			res.send({
				code: 400,
				failed: 'error'
			});
		} else {
			if (results.length > 0) {
				if (results[0].password == password) {
					jwt.sign(
						{ email, password },
						process.env.JWT_KEY,
						{ expiresIn: process.env.JWT_EXP },
						(err, token) => {
							console.log(token);
							console.log(process.env.JWT_KEY);
							res.json({
								code: 200,
								succes: 'login succes',
								token: token
							});
						}
					);
				} else {
					res.send({
						code: 204,
						succes: 'Email and password does not match'
					});
				}
			} else {
				res.send({
					code: 204,
					succes: 'Email and password needed'
				});
			}
		}
	});
};

exports.register = function(req, res) {
	const { username, password, email } = req.body;
	let valid = "SELECT * FROM users WHERE email = '" + email + "'";
	connection.query(valid, function(err, results, fields) {
		if (results.length > 0) {
			res.send({
				code: 400,
				message: 'error add data! username or email is already exists'
			});
		} else {
			connection.query(
				'INSERT INTO users (username, password, email) values (?,?,?)',
				[ username, password, email ],
				function(err, results) {
					if (err) {
						console.log(err);
						res.status(400).json({
							status: 400,
							message: 'Error add new users!'
						});
					} else {
						res.status(200).json({
							status: 200,
							error: false,
							message: 'Successfull user registered, Pls Login!',
							data: req.body
						});
					}
				}
			);
		}
	});
};
