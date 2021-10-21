const { Model, DataTypes } = require('sequelize');
const sequelize = require('../mysql');

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    role: {
      // 0: User, 1: Admin, 2: Sleep
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '00 0 000 000 0000',
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    zipcode: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
  },
  { sequelize, modelName: 'user' },
);

module.exports = User;
