var express = require('express');
var router = express.Router();
const HomeController = require('./../../controller/HomeController/HomeController');

/* GET home page. */
router.get('/', HomeController);

module.exports = router;
