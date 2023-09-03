const User = require('../models/User');

const authorize = (role) => {
  return async (req, res, next) => {
    const user = await User.findById(req.userId);
    if (!user || user.role !== role) {
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  };
};

module.exports = authorize;