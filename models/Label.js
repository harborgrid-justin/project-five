const mongoose = require('mongoose');

const labelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    color: {
        type: String,
        required: true
    }
});

const Label = mongoose.model('Label', labelSchema);

module.exports = Label;
