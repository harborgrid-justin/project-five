import React from 'react';

const TaskDetails = ({ task }) => {
    return (
        <div className="task-details">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Assigned to: {task.assignedTo}</p>
            <p>Due date: {task.dueDate}</p>
        </div>
    );
};

export default TaskDetails;
