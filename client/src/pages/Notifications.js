import React from 'react';
import useNotifications from '../hooks/useNotifications';

const Notifications = () => {
    const { notifications } = useNotifications();

    return (
        <div>
            <h2>Notifications</h2>
            <ul>
                {notifications.map(notification => (
                    <li key={notification.id}>
                        {notification.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;
