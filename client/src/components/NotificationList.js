import React from 'react';

const NotificationList = ({ notifications }) => {
    return (
        <div className="notification-list">
            <h3>Notifications</h3>
            <ul>
                {notifications.map(notification => (
                    <li key={notification.id}>
                        {notification.message} - {new Date(notification.date).toLocaleDateString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationList;
