const Audit = require('../models/Audit'); // Assuming you have an Audit model

// Log a new audit entry
exports.createAudit = async (req, res) => {
    try {
        const audit = new Audit(req.body);
        await audit.save();
        res.status(201).json({ message: 'Audit logged successfully', data: audit });
    } catch (error) {
        res.status(500).json({ error: 'Error logging audit' });
    }
};

// Get all audit entries
exports.getAllAudits = async (req, res) => {
    try {
        const audits = await Audit.find();
        res.status(200).json({ data: audits });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching audits' });
    }
};

// Get audit entries for a specific user or action
exports.getAuditsByFilter = async (req, res) => {
    try {
        const filter = req.query; // e.g., { userId: '12345', action: 'create' }
        const audits = await Audit.find(filter);
        res.status(200).json({ data: audits });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching audits' });
    }
};

// TODO: Add more functionalities as needed
