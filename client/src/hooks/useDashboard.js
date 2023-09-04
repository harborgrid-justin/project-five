import { useState, useEffect } from 'react';
import api from '../utils/api';

const useDashboard = () => {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null); // Added error state

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const response = await api.get('/dashboard');
                setProjects(response.data.projects);
            } catch (error) {
                console.error('Error fetching dashboard data', error);
                setError('Failed to fetch dashboard data. Please try again.'); // Set error state
            }
        };

        fetchDashboardData();
    }, []);

    return { projects, error }; // Return error as part of the hook's return value
};

export default useDashboard;
