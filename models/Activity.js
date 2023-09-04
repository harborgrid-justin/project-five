const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
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
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
