const Comment = require('../models/Comment');

exports.getCommentsByTask = async (req, res) => {
    try {
        const comments = await Comment.find({ taskId: req.params.taskId });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching comments' });
    }
};
