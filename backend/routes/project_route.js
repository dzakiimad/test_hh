const express = require('express')
const Project_controller = require('../controllers/project_controllers')
const projectRoute = express.Router()

projectRoute.post('/',Project_controller.addProject)
projectRoute.get('/',Project_controller.getProject)

module.exports = projectRoute

