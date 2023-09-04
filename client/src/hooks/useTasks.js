import { useState } from 'react';
import api from '../utils/api';

const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const response = await api.get('/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks', error);
        }
    };

    return { tasks, fetchTasks };
};

export default useTasks;
