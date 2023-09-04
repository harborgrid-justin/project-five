const Attachment = require('../models/Attachment');

exports.uploadAttachment = async (req, res) => {
    try {
        const attachment = new Attachment({
            filename: req.file.filename,
            taskId: req.params.taskId
        });
        await attachment.save();
        res.status(201).json(attachment);
    } catch (error) {
        res.status(500).json({ message: 'Error uploading attachment' });
    }
};
