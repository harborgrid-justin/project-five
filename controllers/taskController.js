const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ projectId: req.params.projectId });
        res.status(200).json(tasks);
    } catch (error) {
        console.error("Error fetching tasks:", error); // Log the error
        res.status(500).json({ message: 'Error fetching tasks' });
    }
};
