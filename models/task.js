const { sequelize } = require('../db')
const { DataTypes } = require('sequelize')

const Task = sequelize.define('Task',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    completed: {
      type: DataTypes.BOOLEAN
    },
    user: {
      type: DataTypes.STRING
    }
  })

module.exports = Task
