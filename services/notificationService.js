const socketIo = require('socket.io');
const Notification = require('../models/Notification');

let io;

exports.initialize = (server) => {
  io = socketIo(server);
  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};

exports.sendNotification = async (userId, message) => {
  try {
    // Store the notification in the database
    const notification = new Notification({ userId, message });
    await notification.save();

    io.to(userId).emit('notification', message);
  } catch (error) {
    console.error('Error sending notification:', error);
  }
};
