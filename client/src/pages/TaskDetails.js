import React from 'react';
import useTask from '../hooks/useTask';

const TaskDetails = ({ taskId }) => {
    const { task } = useTask(taskId);

    if (!task) {
        return <p>Loading task details...</p>; // Handle loading or no data state
    }

    return (
        <section> {/* Changed to semantic <section> tag */}
            <h2>Task Details</h2>
            <p><strong>Title:</strong> {task.title}</p> {/* Added <strong> tag for emphasis */}
            <p><strong>Description:</strong> {task.description}</p> {/* Added <strong> tag for emphasis */}
        </section>
    );
};

export default TaskDetails;
