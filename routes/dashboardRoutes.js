const express = require('express');
const projectController = require('../controllers/projectController');
const router = express.Router();

router.get('/dashboard', projectController.getAllProjects);

module.exports = router;
