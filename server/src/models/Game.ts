// This file is used to define the Game model for the server

import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface GameAttributes {
  id: string;
  date: Date;
  name: string;
  shortName: string;
  seasonYear: number;
  seasonType: string;
  weekNumber: number;
  weekText: string;
  homeTeamId: string;
  awayTeamId: string;
}

interface GameCreationAttributes extends Optional<GameAttributes, never> {}

export class Game extends Model<GameAttributes, GameCreationAttributes> implements GameAttributes {
  public id!: string;
  public date!: Date;
  public name!: string;
  public shortName!: string;
  public seasonYear!: number;
  public seasonType!: string;
  public weekNumber!: number;
  public weekText!: string;
  public homeTeamId!: string;
  public awayTeamId!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function GameFactory(sequelize: Sequelize): typeof Game {
  Game.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shortName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'short_name',
      },
      seasonYear: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'season_year',
      },
      seasonType: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'season_type',
      },
      weekNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'week_number',
      },
      weekText: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'week_text',
      },
      homeTeamId: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'home_team_id',
        references: {
          model: 'teams',
          key: 'id',
        },
      },
      awayTeamId: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'away_team_id',
        references: {
          model: 'teams',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      tableName: 'games',
      underscored: true,
    }
  );

  return Game;
}
