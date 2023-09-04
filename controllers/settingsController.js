const Settings = require('../models/Settings');

exports.updateSettings = async (req, res) => {
    try {
        const settings = await Settings.findOneAndUpdate({ userId: req.user.id }, req.body, { new: true });
        res.status(200).json(settings);
    } catch (error) {
        res.status(500).json({ message: 'Error updating settings' });
    }
};
