const express = require('express');
const userController = require('../controllers/userController');
const { authenticate } = require('../middleware/security');

const router = express.Router();

// Route for user registration
router.post('/register', userController.registerUser);

// Route for user login
router.post('/login', userController.loginUser);

// Route to fetch authenticated user's profile
router.get('/profile', authenticate, userController.getUserProfile);

// Route to update authenticated user's profile
router.put('/profile', authenticate, userController.updateUserProfile);

module.exports = router;
