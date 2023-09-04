const express = require('express');
const taskController = require('../controllers/taskController');
const attachmentController = require('../controllers/attachmentController');
const router = express.Router();

router.get('/tasks/:taskId', taskController.getTaskDetails);
router.post('/tasks/:taskId/attachments', attachmentController.uploadAttachment);

module.exports = router;
