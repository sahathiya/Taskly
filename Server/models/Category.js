const sequelize=require('../config/db')
const { DataTypes } = require("sequelize");


const Category = sequelize.define("Category", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId:{
type:DataTypes.INTEGER,
 allowNull: false,
    references: {
      model: 'users', 
      key: 'id'
    }
  },
  name: {
    type: DataTypes.STRING
  },
  
}, {
  tableName: 'categories', 
  timestamps: false  
});

module.exports = Category;