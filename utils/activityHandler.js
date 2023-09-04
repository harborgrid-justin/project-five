const Activity = require('../models/Activity');

const logActivity = async (description, userId) => {
    try {
        const activity = new Activity({ description, userId });
        await activity.save();
    } catch (error) {
        console.error('Error logging activity', error);
    }
};

module.exports = logActivity;
