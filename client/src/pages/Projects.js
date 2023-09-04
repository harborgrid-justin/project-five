import React, { useEffect } from 'react';
import useProjects from '../hooks/useProjects';

const Projects = () => {
    const { projects, fetchProjects } = useProjects();

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <div>
            <h2>Projects</h2>
            <ul>
                {projects.map(project => (
                    <li key={project._id}>{project.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;
