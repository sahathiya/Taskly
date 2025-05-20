const sequelize=require('../config/db')
const { DataTypes } = require("sequelize");


const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'users', 
  timestamps: false  
});

module.exports = User;