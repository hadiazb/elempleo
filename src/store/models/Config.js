const { Model, DataTypes, BOOLEAN } = require('sequelize');
const sequelize = require('../mysql');

class Config extends Model {}

Config.init(
  {
    timeBanner: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 8000,
    },
    timeCarousel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 8000,
    },
    captchaId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    captchaVisible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  { sequelize, modelName: 'config' },
);

module.exports = Config;
