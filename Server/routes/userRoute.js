const express=require('express')
const { AllUsers, UserRegistration, UserLogin, UserLogout } = require('../controllers/userController')
const tryCatch=require('../middlewares/tryCatch')
const userRoute=express.Router()
userRoute
.post('/register',tryCatch(UserRegistration))
.post('/login',tryCatch(UserLogin))
.post('/logout',tryCatch(UserLogout))
.get('/all',tryCatch(AllUsers))

module.exports=userRoute