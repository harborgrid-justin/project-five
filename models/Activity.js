const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 3 // Ensure the description is at least 3 characters long
    },
    date: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true // Automatically create 'createdAt' and 'updatedAt' fields
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
