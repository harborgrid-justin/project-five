const express = require('express');
const auditController = require('../controllers/auditController');
const { authenticate } = require('../middleware/security');

const router = express.Router();

router.use(authenticate); // Ensure all audit routes are authenticated

// Route to fetch all audit logs
router.get('/', auditController.getAllAudits);

// Route to log a new audit action
router.post('/', auditController.logAuditAction);

module.exports = router;
