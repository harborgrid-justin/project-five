const User = require('../models/User');

const roleAuthorization = (role) => {
    return (req, res, next) => {
        User.findById(req.user._id, (err, user) => {
            if (err || !user) {
                return res.status(404).send('User not found');
            }
            if (user.role !== role) {
                return res.status(403).send('User not authorized');
            }
            next();
        });
    };
};

module.exports = roleAuthorization;
