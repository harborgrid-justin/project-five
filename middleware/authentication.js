const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) return res.status(401).send('Authorization header missing');

    const token = authHeader.replace('Bearer ', '');
    if (!token) return res.status(401).send('Access Denied');

    try {
        if (!process.env.TOKEN_SECRET) {
            throw new Error('TOKEN_SECRET not set in environment variables');
        }
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        if (error.message === 'TOKEN_SECRET not set in environment variables') {
            return res.status(500).send('Server error');
        }
        res.status(400).send('Invalid Token');
    }
};

module.exports = authenticate;
