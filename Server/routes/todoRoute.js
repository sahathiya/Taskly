const express=require('express')
const { AddTodo, RemoveTodo, AllTodo, EditTodo } = require('../controllers/todoController')
const tryCatch = require('../middlewares/tryCatch')
const { userAuthMiddleware } = require('../middlewares/userAuthMiddleware')


const todoRoute=express.Router()

todoRoute
.post('/add',userAuthMiddleware,tryCatch(AddTodo))
.delete('/remove/:id',tryCatch(RemoveTodo))
.patch('/edit/:id',tryCatch(EditTodo))
.get('/all',userAuthMiddleware,tryCatch(AllTodo))
module.exports=todoRoute