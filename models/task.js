const { sequelize } = require('../db')
const { DataTypes } = require('sequelize')

const Task = sequelize.define('Tasks',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    completed: {
      type: DataTypes.BOOLEAN
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: true
  }
)

module.exports = Task
