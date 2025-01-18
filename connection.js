const sequelize = require('sequelize');
const sequelizeConnection = new sequelize(
"bootstacks_db",
"postgres",
"rainDr0ps",
{
    host: "localhost",
    dialect: "postgres"
}
);

module.exports = sequelizeConnection;