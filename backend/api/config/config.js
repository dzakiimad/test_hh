require('dotenv').config();

module.exports = {
  local: {
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    //dialect: "mysql"
    dialect: "postgres",
    dialectModule: require('pg'),
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  },
  development: {
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    //dialect: "mysql"
    dialect: "postgres",
    dialectModule: require('pg'),
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }, // pool was here, removed it to make the whole thing smaller 
  production: {
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    dialect: "postgres",
    dialectOptions: {
      ssl: true
    }
    // empty until i get actual production values from my hosting service 
  }
}