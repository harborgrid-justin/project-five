const logger = require('../services/loggerService');

const errorHandler = (err, req, res, next) => {
  logger.error(`Error occurred: ${err.message}`);
  
  // Handle specific error types as needed
  if (err.name === 'ValidationError') {
    return res.status(400).json({ message: err.message });
  }

  // Generic error response
  res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = errorHandler;
