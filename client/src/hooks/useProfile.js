import { useState, useEffect } from 'react';
import api from '../utils/api';

const useProfile = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await api.get('/profile');
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user profile', error);
            }
        };

        fetchUserProfile();
    }, []);

    return { user };
};

export default useProfile;
