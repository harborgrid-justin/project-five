const User = require('../models/User');

const permissionsChecker = (requiredPermission) => {
    return (req, res, next) => {
        User.findById(req.user._id, (err, user) => {
            if (err || !user) {
                return res.status(404).send('User not found');
            }
            if (!user.permissions.includes(requiredPermission)) {
                return res.status(403).send('User lacks necessary permissions');
            }
            next();
        });
    };
};

module.exports = permissionsChecker;
