const { Model, DataTypes } = require('sequelize');
const sequelize = require('../mysql');

class Banner extends Model {}

Banner.init(
  {
    imgDesktop: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imgMobile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imgDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subtitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: 'banners' },
);

module.exports = Banner;
