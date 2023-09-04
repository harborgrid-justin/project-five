const jwt = require('jsonwebtoken');

exports.authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Bearer <token>
    if (!token) {
        return res.status(401).send({ message: 'No token provided' });
    }

    if (!process.env.JWT_SECRET) {
        return res.status(500).send({ message: 'Server error: JWT_SECRET not set' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.error("Token verification error:", error); // Log the error
        if (error.name === 'TokenExpiredError') {
            return res.status(401).send({ message: 'Token has expired' });
        }
        res.status(401).send({ message: 'Invalid token' });
    }
};
