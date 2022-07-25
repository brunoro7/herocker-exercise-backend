require('dotenv/config');

const { HOST, PASSWORD_POSTGRES, DATABASE, DB_USERNAME, DB_PORT } = process.env;

module.exports = {
  development: {
    username: DB_USERNAME || 'root',
    password: PASSWORD_POSTGRES || null,
    database: DATABASE || 'database_development',
    host: HOST || '127.0.0.1',
    port: DB_PORT,
    dialect: 'postgres',
  },
  test: {
    username: DB_USERNAME || 'root',
    password: PASSWORD_POSTGRES || null,
    database: DATABASE || 'database_test',
    host: HOST || '127.0.0.1',
    port: DB_PORT,
    dialect: 'postgres',
  },
  production: {
    username: DB_USERNAME || 'root',
    password: PASSWORD_POSTGRES || null,
    database: DATABASE || 'database_test',
    host: HOST || '127.0.0.1',
    port: DB_PORT,
    dialect: 'postgres',
  },
};