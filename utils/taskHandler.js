const Task = require('../models/Task');

const createTask = async (data) => {
    try {
        const task = new Task(data);
        await task.save();
        return task;
    } catch (error) {
        console.error('Error creating task', error);
        throw error;
    }
};

module.exports = createTask;
