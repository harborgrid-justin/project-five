import React, { useEffect } from 'react';
import useTasks from '../hooks/useTasks';

const TaskList = () => {
    const { tasks, fetchTasks } = useTasks();

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div>
            <h2>Tasks</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
