import { useState } from 'react';
import api from '../utils/api';

const useProjects = () => {
    const [projects, setProjects] = useState([]);

    const fetchProjects = async () => {
        try {
            const response = await api.get('/projects');
            setProjects(response.data);
        } catch (error) {
            console.error('Error fetching projects', error);
        }
    };

    return { projects, fetchProjects };
};

export default useProjects;
