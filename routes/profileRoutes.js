const express = require('express');
const profileController = require('../controllers/profileController');
const router = express.Router();

router.get('/profile', profileController.getUserProfile);

module.exports = router;
