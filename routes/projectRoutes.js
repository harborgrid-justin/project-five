const express = require('express');
const projectController = require('../controllers/projectController');
const { authenticate } = require('../middleware/security');

const router = express.Router();

router.use(authenticate); // Ensure all project routes are authenticated

router.post('/', projectController.createProject);
router.get('/:projectId', projectController.getProject);
router.put('/:projectId', projectController.updateProject);
router.delete('/:projectId', projectController.deleteProject);

module.exports = router;
