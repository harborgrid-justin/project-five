const Audit = require('../models/Audit');

exports.logAction = async (userId, action, details) => {
  try {
    const audit = new Audit({
      userId,
      action,
      details,
      timestamp: new Date()
    });
    await audit.save();
  } catch (error) {
    console.error('Failed to log audit:', error);
  }
};

exports.getRecentActions = async (limit = 10) => {
  try {
    return await Audit.find().sort({ timestamp: -1 }).limit(limit);
  } catch (error) {
    console.error('Failed to fetch recent audits:', error);
    return [];
  }
};
