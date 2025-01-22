import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection';
import User from './User';
import Game from './Game';

// Set up associations



User.hasMany(Game, {
  foreignKey: 'user_id',
});

Game.belongsTo(User, {
  foreignKey: 'user_id',
});

export { User, Game }; 