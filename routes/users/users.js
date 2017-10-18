var express = require('express');
var router = express.Router();
const UsersController = require('./../../controller/UsersController/CreateUserController')
const GetUsersController = require('./../../controller/UsersController/GetAllUserController')


router.post('/create', UsersController);
router.get('/all', GetUsersController);

module.exports = router;
