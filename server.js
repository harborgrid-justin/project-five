const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/dbConnection');
dotenv.config();
const app = express();

// Middleware
app.use(express.json());
// TODO: Add more middleware for logging, error handling, security, etc.

// Connect to the database
connectDB().catch(error => {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
});

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
    server.close(() => {
        console.log('Server closed.');
    });
});
