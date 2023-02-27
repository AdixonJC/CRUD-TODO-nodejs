const { DataTypes } = require('sequelize');
const db = require('../configs/database');

const Todos = db.define('todos',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    title: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    status: {
        type: DataTypes.STRING,
        allowNull:false,
    },
});

module.exports = Todos 