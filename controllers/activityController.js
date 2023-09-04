const Activity = require('../models/Activity');

exports.getRecentActivities = async (req, res) => {
    const limit = parseInt(req.query.limit) || 10; // Allow pagination by accepting a limit query parameter
    if (limit < 1 || limit > 100) {
        return res.status(400).json({ message: 'Invalid limit value. It should be between 1 and 100.' });
    }
    try {
        const activities = await Activity.find().sort({ date: -1 }).limit(limit);
        res.status(200).json(activities);
    } catch (error) {
        console.error("Error fetching recent activities:", error); // Log the error
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: 'Invalid input.' });
        }
        res.status(500).json({ message: 'Error fetching recent activities' });
    }
};
