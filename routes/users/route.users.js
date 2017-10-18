var express = require('express')
var router = express.Router()


// Get controller
const UsersController = require('./../../controller/UsersController/CreateUserController')
const GetUsersController = require('./../../controller/UsersController/GetAllUserController')
const GetDetailUsersController = require('./../../controller/UsersController/DetailUserController')
const DeleteUsersController = require('./../../controller/UsersController/DeleteUserController')
const UpdateUsersController = require('./../../controller/UsersController/UpdateUserController')


router.post('/create', UsersController)
router.get('/all', GetUsersController)
router.get('/detail/:userId', GetDetailUsersController)
router.post('/delete', DeleteUsersController)
router.put('/update/:userId', UpdateUsersController)

module.exports = router
