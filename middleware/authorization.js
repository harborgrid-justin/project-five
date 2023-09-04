const Project = require('../models/Project');

const authorize = (req, res, next) => {
    const projectId = req.params.projectId;
    Project.findById(projectId, (err, project) => {
        if (err || !project) {
            return res.status(404).send('Project not found');
        }
        if (project.owner.toString() !== req.user._id.toString()) {
            return res.status(403).send('User not authorized');
        }
        next();
    });
};

module.exports = authorize;
