const Sequelize = require('sequelize');

const configDB = require('../config/database');
const User = require('../models/user');
const Address = require('../models/Address');
const Tech = require('../models/Tech');

const connection = new Sequelize(configDB);

User.init(connection); // Passing the database connection to User's class
Address.init(connection); // Passing the database connection to Address's class
Tech.init(connection);

User.associate(connection.models);
Address.associate(connection.models);
Tech.associate(connection.models);

module.exports = connection;