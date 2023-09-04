const Activity = require('../models/Activity');

const activityLogger = (description) => {
    return (req, res, next) => {
        const activity = new Activity({
            description: description,
            userId: req.user._id
        });

        activity.save().then(() => {
            next();
        }).catch(error => {
            console.error('Error logging activity', error);
            next();
        });
    };
};

module.exports = activityLogger;
