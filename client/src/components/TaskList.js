const express = require('express');
const auditController = require('../controllers/auditController');
const { authenticate } = require('../middleware/security');

const router = express.Router();

router.use(authenticate); // Ensure all audit routes are authenticated

router.get('/', auditController.getAllAudits);
router.post('/', auditController.logAuditAction);

module.exports = router;
