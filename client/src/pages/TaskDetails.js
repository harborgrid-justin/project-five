import React from 'react';
import useTask from '../hooks/useTask';

const TaskDetails = ({ taskId }) => {
    const { task } = useTask(taskId);

    return (
        <div>
            <h2>Task Details</h2>
            <p>Title: {task.title}</p>
            <p>Description: {task.description}</p>
        </div>
    );
};

export default TaskDetails;
