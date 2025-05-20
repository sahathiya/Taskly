const sequelize=require('../config/db')
const { DataTypes } = require("sequelize");


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
 dueDate: {
    type: DataTypes.DATEONLY  
  },
  createdAt: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'todos', 
  timestamps: false  
});

module.exports = Todo;