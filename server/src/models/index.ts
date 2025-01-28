// This file is used to define the models for the server

import { Sequelize } from 'sequelize';
import { UserFactory } from './User';
import { GameFactory } from './Game';

let User: ReturnType<typeof UserFactory>;
let Game: ReturnType<typeof GameFactory>;

export const initializeModels = (sequelize: Sequelize) => {
  const User = UserFactory(sequelize);
  const Game = GameFactory(sequelize);

  // Set up associations
  User.hasMany(Game, {
    foreignKey: 'user_id',
  });

  Game.belongsTo(User, {
    foreignKey: 'user_id',
  });

  return {
    User,
    Game,
  };
};

export {User, Game } ; 