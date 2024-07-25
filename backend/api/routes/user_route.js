const express = require('express')
const User_controller = require('../controllers/user_controller')
const authentication = require('../middlewares/authentication')
const userRoute = express.Router()

userRoute.put('/',authentication,User_controller.updateUser)
userRoute.post('/login',User_controller.login)

module.exports = userRoute

