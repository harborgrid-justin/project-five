import React from 'react';

const TaskOverview = ({ tasks }) => {
    return (
        <div className="task-overview">
            <h3>Tasks Overview</h3>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.title} - {task.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskOverview;
