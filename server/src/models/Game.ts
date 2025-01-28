// This file is used to define the Game model for the server

import { DataTypes, Sequelize, Model, Optional } from 'sequelize';


interface GameAttributes {
  id: number;
  gameID: string;
  date: string;
  venue: string;
  city: string;
  opposingTeam: string;
  zipCode: string;
}

interface GameCreationAttributes extends Optional<GameAttributes, 'id'> {}

export class Game extends Model<GameAttributes, GameCreationAttributes> implements GameAttributes {
  public id!: number;
  public gameID!: string;
  public date!: string;
  public venue!: string;
  public city!: string;
  public opposingTeam!: string;
  public zipCode!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function GameFactory(sequelize: Sequelize): typeof Game {
  Game.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      gameID: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      venue: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      opposingTeam: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      zipCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'games',
    }
  );

  return Game;
}
