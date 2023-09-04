const Activity = require('../models/Activity');

exports.getRecentActivities = async (req, res) => {
    try {
        const activities = await Activity.find().sort({ date: -1 }).limit(10);
        res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching recent activities' });
    }
};
