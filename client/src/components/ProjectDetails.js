import React from 'react';

const ProjectDetails = ({ project }) => {
  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <p>Created on: {new Date(project.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default ProjectDetails;
