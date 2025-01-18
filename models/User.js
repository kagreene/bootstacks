const {Model, DataTypes} = require('sequelize');
const sequelizeConnection = require('../connection');
class User extends Model {}
User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
}, {sequelize: sequelizeConnection, modelName: 'user'});

module.exports = User;