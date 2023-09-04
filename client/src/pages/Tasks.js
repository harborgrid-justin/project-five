import React, { useEffect } from 'react';
import useTasks from '../hooks/useTasks';
import TaskForm from '../components/TaskForm';

const Tasks = () => {
    const { tasks, fetchTasks } = useTasks();

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div>
            <h2>Tasks</h2>
            <TaskForm />
            <ul>
                {tasks.map(task => (
                    <li key={task._id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Tasks;
