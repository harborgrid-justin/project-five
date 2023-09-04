const express = require('express');
const notificationController = require('../controllers/notificationController');
const router = express.Router();

router.get('/notifications', notificationController.getAllNotifications);

module.exports = router;
