const { Model, DataTypes } = require('sequelize');
const sequelize = require('../mysql');

class Auth extends Model {}

Auth.init(
  {
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  { sequelize, modelName: 'auth' },
);

module.exports = Auth;
