const express = require('express');
const projectController = require('../controllers/projectController');
const { authenticate } = require('../middleware/security');

const router = express.Router();

router.use(authenticate); // Ensure all project routes are authenticated

// Route to create a new project
router.post('/', projectController.createProject);

// Route to fetch a specific project by its ID
router.get('/:projectId', projectController.getProject);

// Route to update a specific project by its ID
router.put('/:projectId', projectController.updateProject);

// Route to delete a specific project by its ID
router.delete('/:projectId', projectController.deleteProject);

module.exports = router;
