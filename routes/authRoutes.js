const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

// TODO: Add input validation middleware for signup and login routes
router.post('/signup', authController.signup);
router.post('/login', authController.login);

// TODO: Consider adding routes for logout, password reset, etc.

module.exports = router;
