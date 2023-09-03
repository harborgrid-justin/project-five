import React from 'react';

const NotificationList = ({ notifications }) => {
  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map(notification => (
          <li key={notification._id}>
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationList;
