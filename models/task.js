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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: 'tasks',
    timestamps: true,
    underscored: true,
    defaultScope: {
      attributes: ['id', 'title', 'completed', 'user_id']
    }
  }
)

module.exports = Task
