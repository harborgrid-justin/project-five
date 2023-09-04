const Activity = require('../models/Activity');

const activityLogger = (description) => {
    return async (req, res, next) => {
        if (!req.user || !req.user.id) {
            console.error('User ID not available for activity logging');
            return next(new Error('User ID not available for activity logging'));
        }

        try {
            const activity = new Activity({
                description,
                user: req.user.id
            });
            await activity.save();
            next();
        } catch (error) {
            console.error('Error logging activity', error);
            next(error);
        }
    };
};

module.exports = activityLogger;
