const Task = require('../models/Task');

exports.createTask = async (data) => {
  try {
    const task = new Task(data);
    await task.save();
    return task;
  } catch (error) {
    throw new Error('Failed to create task');
  }
};

exports.getTaskById = async (taskId) => {
  try {
    return await Task.findById(taskId);
  } catch (error) {
    throw new Error('Failed to fetch task');
  }
};

exports.updateTask = async (taskId, data) => {
  try {
    return await Task.findByIdAndUpdate(taskId, data, { new: true });
  } catch (error) {
    throw new Error('Failed to update task');
  }
};

exports.deleteTask = async (taskId) => {
  try {
    await Task.findByIdAndDelete(taskId);
  } catch (error) {
    throw new Error('Failed to delete task');
  }
};
