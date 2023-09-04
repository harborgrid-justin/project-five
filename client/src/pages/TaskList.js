import React, { useEffect } from 'react';
import useTasks from '../hooks/useTasks';

const TaskList = () => {
    const { tasks, fetchTasks } = useTasks();

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <section> {/* Changed to semantic <section> tag */}
            <h2>Tasks</h2>
            {tasks && tasks.length > 0 ? (
                <ul>
                    {tasks.map(task => (
                        <li key={task.id}>{task.title}</li>
                    ))}
                </ul>
            ) : (
                <p>No tasks available. Start by creating a new task.</p> {/* Added empty state message */}
            )}
        </section>
    );
};

export default TaskList;
