const Project = require('../models/Project');

exports.getAllProjects = async (req, res) => {
    const limit = parseInt(req.query.limit) || 50; // Default to fetching 50 projects
    const skip = parseInt(req.query.skip) || 0;

    try {
        const projects = await Project.find().limit(limit).skip(skip);
        res.status(200).json(projects);
    } catch (error) {
        console.error("Error fetching projects:", error); // Log the error
        res.status(500).json({ message: 'Error fetching projects' });
    }
};
