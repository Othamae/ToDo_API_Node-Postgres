const { Client } = require('pg')
const { Sequelize } = require('sequelize')

require('dotenv').config()

const client = new Client({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT
})

const sequelize = new Sequelize(client.database, client.user, client.password, {
  host: client.host,
  dialect: 'postgres',
  port: client.port
})

const dbConnection = async () => {
  try {
    await client.connect()
    console.log('Connection to DB has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

module.exports = { sequelize, dbConnection }
