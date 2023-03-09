const { DataTypes } = require('sequelize');
const dbSequelize = require('../database.js');

const Movie = dbSequelize.define(
    "movies",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      rating: {
        type: DataTypes.DECIMAL(3, 1),
        allowNull: false,
      },
      awards: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      release_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      length: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      genre_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "genres",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
    }
);

module.exports = Movie;
