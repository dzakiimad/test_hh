const express = require('express')
const Activity_controller = require('../controllers/activity_controllers')
const authentication = require('../middlewares/authentication')
const activityRoute = express.Router()

activityRoute.use(authentication)
activityRoute.post('/',Activity_controller.addActivity)
activityRoute.get('/',Activity_controller.getActivity)
activityRoute.get('/:id',Activity_controller.getActivityById)
activityRoute.delete('/',Activity_controller.deleteActivity)
activityRoute.put('/',Activity_controller.updateActivity)

module.exports = activityRoute
