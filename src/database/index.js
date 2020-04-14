const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Product = require('../models/Product');
const Provider = require('../models/Provider');

const connection = new Sequelize(dbConfig);

User.init(connection);
Product.init(connection);
Provider.init(connection);


User.associate(connection.models)
Product.associate(connection.models);


module.exports = connection;