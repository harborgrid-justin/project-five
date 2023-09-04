import React from 'react';

const ProjectOverview = ({ project }) => {
    return (
        <div className="project-overview">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>Tasks completed: {project.tasksCompleted}</p>
            <p>Total tasks: {project.totalTasks}</p>
        </div>
    );
};

export default ProjectOverview;
