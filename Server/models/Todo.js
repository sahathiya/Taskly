const sequelize=require('../config/db')
const { DataTypes } = require("sequelize");
const Category=require("../models/Category")

const Todo = sequelize.define("Todo", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users', 
      key: 'id'
    }
  },
   
  title: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  category: {
     type: DataTypes.STRING,
  },
 dueDate: {
    type: DataTypes.DATEONLY  
  },
  status: {
    type: DataTypes.ENUM("Pending", "Completed"),
    defaultValue: "Pending"
  },
  priority: {
    type: DataTypes.ENUM("high", "medium", "low"),
    
  },
  createdAt: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'todos', 
  timestamps: false  
});

// Todo.belongsTo(Category, {
//   foreignKey: 'categoryId'
// });
module.exports = Todo;