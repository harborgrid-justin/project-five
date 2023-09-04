const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    assignedTo: {
        type: String,
        trim: true
    },
    dueDate: {
        type: Date
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
