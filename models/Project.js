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
    startDate: {
        type: Date,
        validate: {
            validator: function(value) {
                return !this.endDate || value <= this.endDate;
            },
            message: 'Start date must be before end date'
        }
    },
    endDate: Date,
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
