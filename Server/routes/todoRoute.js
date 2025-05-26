const express=require('express')
const { AddTodo, RemoveTodo, AllTodo, EditTodo, CompleteTodo, TodoById, SortBasedonDate, CurrentDateTodo, TodoByCategory } = require('../controllers/todoController')
const tryCatch = require('../middlewares/tryCatch')
const { userAuthMiddleware } = require('../middlewares/userAuthMiddleware')
const { AddCategory, RemoveCategory, EditCategory, AllCategory } = require('../controllers/categoryController')


const todoRoute=express.Router()

todoRoute
//todo

.post('/add',userAuthMiddleware,tryCatch(AddTodo))
.get('/details/:id',userAuthMiddleware,tryCatch(TodoById))
.patch('/complete/:id',userAuthMiddleware,tryCatch(CompleteTodo))
.delete('/remove/:id',tryCatch(RemoveTodo))
.patch('/edit/:id',tryCatch(EditTodo))
.get('/all',userAuthMiddleware,tryCatch(AllTodo))

//sort
.get('/sort/date',tryCatch(SortBasedonDate))
.get('/sort/currentdate',tryCatch(CurrentDateTodo))


//categorybased
.get('/category/type',tryCatch(TodoByCategory))


//category

.post('/category/add',userAuthMiddleware,tryCatch(AddCategory))
.delete('/category/remove/:id',tryCatch(RemoveCategory))
.patch('/category/edit/:id',tryCatch(EditCategory))
.get('/category/all',userAuthMiddleware,tryCatch(AllCategory))
module.exports=todoRoute