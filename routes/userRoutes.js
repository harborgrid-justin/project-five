const express = require('express');
const userController = require('../controllers/userController');
const { authenticate } = require('../middleware/security');

const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/profile', authenticate, userController.getUserProfile);
router.put('/profile', authenticate, userController.updateUserProfile);

module.exports = router;
