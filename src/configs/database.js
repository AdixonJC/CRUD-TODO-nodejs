const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const db = new Sequelize({
    database: process.env.DB,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: 'postgres'
});

module.exports = db