const { DataTypes, Sequelize } = require('sequelize');
const { connection } = require('../db/connection');

const User = connection.define('User', {
    username: {
        type: DataTypes.STRING,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
    }
}, {indexed: [{unique: true, fields: ["name"]}]});

module.exports = User;