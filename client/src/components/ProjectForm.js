import React, { useState } from 'react';
import api from '../utils/api';

const ProjectForm = () => {
    const [project, setProject] = useState({ name: '', description: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/projects', project);
            setProject({ name: '', description: '' });
        } catch (error) {
            console.error('Error creating project', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Project Name" 
                value={project.name} 
                onChange={e => setProject({ ...project, name: e.target.value })} 
            />
            <textarea 
                placeholder="Project Description" 
                value={project.description} 
                onChange={e => setProject({ ...project, description: e.target.value })} 
            />
            <button type="submit">Add Project</button>
        </form>
    );
};

export default ProjectForm;
