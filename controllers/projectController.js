const Project = require('../models/Project');

exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        console.error("Error fetching projects:", error); // Log the error
        res.status(500).json({ message: 'Error fetching projects' });
    }
};
