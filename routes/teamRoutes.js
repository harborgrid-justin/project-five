const express = require('express');
const teamController = require('../controllers/teamController');
const router = express.Router();

router.get('/team/:teamId', teamController.getTeamMembers);

module.exports = router;
