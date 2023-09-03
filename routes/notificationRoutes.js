const express = require('express');
const notificationController = require('../controllers/notificationController');
const { authenticate } = require('../middleware/security');

const router = express.Router();

router.use(authenticate); // Ensure all notification routes are authenticated

router.get('/', notificationController.getAllNotifications);
router.put('/:notificationId/read', notificationController.markAsRead);

module.exports = router;
