const Sequelize = require("sequelize");
 
// create connection
exports.db = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
 