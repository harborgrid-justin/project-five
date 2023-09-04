import { useState, useEffect } from 'react';
import api from '../utils/api';

const useNotifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await api.get('/notifications');
                setNotifications(response.data);
            } catch (error) {
                console.error('Error fetching notifications', error);
            }
        };

        fetchNotifications();
    }, []);

    return { notifications };
};

export default useNotifications;
