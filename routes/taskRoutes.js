const express = require('express');
const taskController = require('../controllers/taskController');
const { authenticate } = require('../middleware/security');

const router = express.Router();

router.use(authenticate); // Ensure all task routes are authenticated

router.post('/', taskController.createTask);
router.get('/:taskId', taskController.getTask);
router.put('/:taskId', taskController.updateTask);
router.delete('/:taskId', taskController.deleteTask);

module.exports = router;
