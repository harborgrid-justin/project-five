const Label = require('../models/Label');

exports.getAllLabels = async (req, res) => {
    try {
        const labels = await Label.find();
        res.status(200).json(labels);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching labels' });
    }
};
