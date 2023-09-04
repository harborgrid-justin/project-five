import { useState, useEffect } from 'react';
import api from '../utils/api';

const useSettings = () => {
    const [labels, setLabels] = useState([]);

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const response = await api.get('/settings/labels');
                setLabels(response.data);
            } catch (error) {
                console.error('Error fetching settings', error);
            }
        };

        fetchSettings();
    }, []);

    return { labels };
};

export default useSettings;
``
