const express = require('express');
const router = express.Router();

const auth_controller = require('../src/authController');
const create_controller = require('../src/createController');

//AUTH
router.post('/signup', auth_controller.signup_post);
router.post('/login', auth_controller.login_post);

// CREATE
router.post('create', create_controller.create_post);

module.exports = router;
