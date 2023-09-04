const mongoose = require('mongoose');

const preferenceSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    theme: {
        type: String,
        default: 'light'
    },
    notifications: {
        type: Boolean,
        default: true
    }
});

const Preference = mongoose.model('Preference', preferenceSchema);

module.exports = Preference;
