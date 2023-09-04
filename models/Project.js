const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    startDate: Date,
    endDate: Date,
    members: [String]
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
