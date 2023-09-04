import { useState } from 'react';
import api from '../utils/api';

const useAnalytics = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await api.get('/analytics');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching analytics data', error);
        }
    };

    return { data, fetchData };
};

export default useAnalytics;
