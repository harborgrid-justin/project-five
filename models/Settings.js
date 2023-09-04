const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    theme: {
        type: String,
        enum: ['light', 'dark'],
        default: 'light'
    },
    notifications: {
        type: Boolean,
        default: true
    }
});

const Settings = mongoose.model('Settings', settingsSchema);

module.exports = Settings;
