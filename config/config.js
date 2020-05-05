'use strict'

require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.LOCAL_USERNAME,
    "password": process.env.LOCAL_PASSWORD,
    "database": process.env.LOCAL_DATABASE,
    "host": '127.0.0.1',
    "port": process.env.LOCAL_DATABASE_PORT,
    "dialect": 'mysql',
    "pool": {
      "max": 50,
      "min": 0,
      "adquire": 30000,
      "idle": 10000
    }
  },
  "test": {
    "username": process.env.LOCAL_USERNAME,
    "password": process.env.LOCAL_PASSWORD,
    "database": process.env.LOCAL_DATABASE,
    "host": '127.0.0.1',
    "port": process.env.LOCAL_DATABASE_PORT,
    "dialect": 'mysql'
  },
  "production": {
    "username": process.env.LOCAL_USERNAME,
    "password": process.env.LOCAL_PASSWORD,
    "database": process.env.LOCAL_DATABASE,
    "host": process.env.DB_HOSTNAME,
    "port": process.env.LOCAL_DATABASE_PORT,
    "dialect": 'mysql',
    "pool": {
      "max": 50,
      "min": 0,
      "adquire": 30000,
      "idle": 10000
    }
  }
};