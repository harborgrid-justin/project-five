const mongoose = require('mongoose');

const attachmentSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true,
        trim: true
    },
    taskId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Attachment = mongoose.model('Attachment', attachmentSchema);

module.exports = Attachment;
