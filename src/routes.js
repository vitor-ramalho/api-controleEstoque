const express = require('express');

const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');
const ProviderController = require('./controllers/ProviderController');

const routes = express.Router();


routes.post('/provider', ProviderController.store);
routes.get('/provider', ProviderController.index);

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

routes.get('/products', ProductController.index);
routes.get('/users/:user_id/products', ProductController.userProducts);
routes.post('/users/:user_id/:provider_id/products', ProductController.store);


module.exports = routes