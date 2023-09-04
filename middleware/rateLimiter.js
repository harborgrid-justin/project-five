const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: (process.env.RATE_LIMIT_WINDOW || 15) * 60 * 1000, // Default to 15 minutes
    max: process.env.RATE_LIMIT_MAX || 100, // Default to 100 requests
    message: 'Too many requests, please try again later.'
});

module.exports = limiter;
