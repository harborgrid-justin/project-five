const mongoose = require('mongoose');

const connectDB = async () => {
    const retries = 5;
    for (let i = 0; i < retries; i++) {
        try {
            if (!process.env.MONGO_URI) {
                throw new Error('MONGO_URI not set in environment variables');
            }
            await mongoose.connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            });
            console.log('MongoDB connected');
            break;
        } catch (error) {
            console.error(`Error connecting to MongoDB. Attempt ${i + 1} of ${retries}`, error);
            if (i === retries - 1) {
                process.exit(1);
            }
            await new Promise(res => setTimeout(res, 5000)); // Wait for 5 seconds before retrying
        }
    }
};

module.exports = connectDB;
