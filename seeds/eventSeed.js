const { Model, DataTypes, INTEGER, STRING } = require("sequelize");
const sequelize = require("../connection/connection.js");

class Event extends Model {}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    eventTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: false,
    underscored: true,
    modelName: "event",
  }
);

module.exports = Event;