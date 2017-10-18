var express = require('express');
var router = express.Router();
const UsersController = require('./../../controller/UsersController/CreateUserController')

/* GET users listing. */
router.post('/create', UsersController);

module.exports = router;
