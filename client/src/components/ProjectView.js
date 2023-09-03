import React, { useState, useEffect } from 'react';
import TaskBoard from './TaskBoard';
import ErrorBoundary from './ErrorBoundary';

const ProjectView = ({ projectId }) => {
  const [project, setProject] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/projects/${projectId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch project details');
        }
        return res.json();
      })
      .then((data) => setProject(data))
      .catch((err) => setError(err.message));
  }, [projectId]);

  if (error) return <div>Error: {error}</div>;
  if (!project) return <div>Loading...</div>;

  return (
    <ErrorBoundary>
      <div>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <TaskBoard projectId={projectId} />
      </div>
    </ErrorBoundary>
  );
};

export default ProjectView;
