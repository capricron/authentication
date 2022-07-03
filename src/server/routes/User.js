const express = require('express');
const router = express.Router();
const {RegisterUser, LoginUser, getSingleUser} = require('../controllers/userController');
const {validation, validationDaftar, validationLogin} = require('../validator/validator');

const middleware = require('../middleware/middleware');

router.post('/register', validationDaftar , validation ,RegisterUser);
router.post('/login',validationLogin, validation ,LoginUser);

router.get('/user', middleware, getSingleUser)

module.exports = router;