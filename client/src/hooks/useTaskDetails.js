import { useState, useEffect } from 'react';
import api from '../utils/api';

const useTaskDetails = (taskId) => {
    const [task, setTask] = useState({});

    useEffect(() => {
        const fetchTaskDetails = async () => {
            try {
                const response = await api.get(`/tasks/${taskId}`);
                setTask(response.data);
            } catch (error) {
                console.error('Error fetching task details', error);
            }
        };

        fetchTaskDetails();
    }, [taskId]);

    return { task };
};

export default useTaskDetails;
