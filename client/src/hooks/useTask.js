import { useState, useEffect } from 'react';
import api from '../utils/api';

const useTask = (taskId) => {
    const [task, setTask] = useState({});

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await api.get(`/tasks/${taskId}`);
                setTask(response.data);
            } catch (error) {
                console.error('Error fetching task details', error);
            }
        };

        fetchTask();
    }, [taskId]);

    return { task };
};

export default useTask;
