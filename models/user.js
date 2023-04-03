const { sequelize } = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('User',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'Users',
    timestamps: true,
    underscored: true,
    defaultScope: {
      attributes: ['id', 'name', 'email', 'password']
    },
    toJSON: {
      exclude: ['password']
    }
  }
)

module.exports = User
