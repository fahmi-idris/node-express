var express = require('express');
var router = express.Router();
const UsersController = require('./../../controller/UsersController')

/* GET users listing. */
router.get('/:id/detail', UsersController);

module.exports = router;
