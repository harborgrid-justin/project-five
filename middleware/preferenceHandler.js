const Preference = require('../models/Preference');

const preferenceHandler = (req, res, next) => {
    Preference.findOne({ userId: req.user._id }, (err, preference) => {
        if (err) {
            return res.status(500).send('Error fetching preferences');
        }

        if (!preference) {
            return res.status(404).send('Preferences not found for the user');
        }

        req.preference = preference;
        next();
    });
};

module.exports = preferenceHandler;
