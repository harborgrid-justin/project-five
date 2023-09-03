const Project = require('../models/Project');

exports.createProject = async (data) => {
  try {
    const project = new Project(data);
    await project.save();
    return project;
  } catch (error) {
    throw new Error('Failed to create project');
  }
};

exports.getProjectById = async (projectId) => {
  try {
    return await Project.findById(projectId);
  } catch (error) {
    throw new Error('Failed to fetch project');
  }
};

exports.updateProject = async (projectId, data) => {
  try {
    return await Project.findByIdAndUpdate(projectId, data, { new: true });
  } catch (error) {
    throw new Error('Failed to update project');
  }
};

exports.deleteProject = async (projectId) => {
  try {
    await Project.findByIdAndDelete(projectId);
  } catch (error) {
    throw new Error('Failed to delete project');
  }
};
