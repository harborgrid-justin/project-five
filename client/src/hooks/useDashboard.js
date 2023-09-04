import { useState, useEffect } from 'react';
import api from '../utils/api';

const useDashboard = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const response = await api.get('/dashboard');
                setProjects(response.data.projects);
            } catch (error) {
                console.error('Error fetching dashboard data', error);
            }
        };

        fetchDashboardData();
    }, []);

    return { projects };
};

export default useDashboard;
