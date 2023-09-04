const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
    const limit = parseInt(req.query.limit) || 50; // Default to fetching 50 users
    const skip = parseInt(req.query.skip) || 0;

    try {
        const users = await User.find().limit(limit).skip(skip);
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error); // Log the error
        res.status(500).json({ message: 'Error fetching users' });
    }
};
