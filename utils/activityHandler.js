const Activity = require('../models/Activity');

const logActivity = async (description, userId) => {
    try {
        const activity = new Activity({ description, userId });
        await activity.save();
        return { success: true };
    } catch (error) {
        console.error('Error logging activity', error);
        return { success: false, error: 'Error logging activity' };
    }
};

module.exports = logActivity;
