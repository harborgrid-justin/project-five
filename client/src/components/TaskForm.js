import React, { useState } from 'react';
import api from '../utils/api';

const TaskForm = () => {
    const [task, setTask] = useState({ title: '', description: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/tasks', task);
            setTask({ title: '', description: '' });
        } catch (error) {
            console.error('Error creating task', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Task Title" 
                value={task.title} 
                onChange={e => setTask({ ...task, title: e.target.value })} 
            />
            <textarea 
                placeholder="Task Description" 
                value={task.description} 
                onChange={e => setTask({ ...task, description: e.target.value })} 
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
