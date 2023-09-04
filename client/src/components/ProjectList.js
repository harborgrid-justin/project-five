import React from 'react';

const ProjectList = ({ projects }) => {
    return (
        <div className="project-list">
            <h3>Projects</h3>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        {project.name} - {project.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectList;
