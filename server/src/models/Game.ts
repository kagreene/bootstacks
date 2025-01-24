// This file is used to define the Game model for the server

import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface GameAttributes {
  id: number;
  date: Date;
  homeTeam: string;
  awayTeam: string;
  venue: string;
  weather: string;
  homeScore: number;
  awayScore: number;
}

interface GameCreationAttributes extends Optional<GameAttributes, 'id'> {}

export class Game extends Model<GameAttributes, GameCreationAttributes> implements GameAttributes {
  public id!: number;
  public date!: Date;
  public homeTeam!: string;
  public awayTeam!: string;
  public venue!: string;
  public weather!: string;
  public homeScore!: number;
  public awayScore!: number;
}

export function GameFactory(sequelize: Sequelize): typeof Game {
  Game.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      homeTeam: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      awayTeam: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      venue: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weather: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      homeScore: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      awayScore: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'games',
      sequelize,
    }
  );

  return Game;
}
