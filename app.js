require('dotenv').config();

var express = require('express');
const logger = require('morgan');
var cors = require('cors');
app = express();
(port = process.env.PORT || 3000),
	(bodyParser = require('body-parser')),
	(category_controller = require('./src/controllers/category'));
product_controller = require('./src/controllers/product');
user_controller = require('./src/controllers/user');
var todoList = require('./src/controllers/product');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
	cors({
		origin: ''
	})
);

var products_routes = require('./src/routes/productRoute');
var user_route = require('./src/routes/userRoute');
var category_routes = require('./src/routes/categoryRoute');

products_routes(app);
category_routes(app);
user_route(app);


app.route('*').get(todoList.notFound);

app.listen(port);
console.log('server started on: ' + port);
