const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('test_hh_dev', 'postgres', 'postgres', {
    host: 'localhost',
    dialect:'postgres' 
  })
module.exports = {sequelize}
