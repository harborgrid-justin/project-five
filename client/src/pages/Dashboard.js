import React, { useState, useEffect } from 'react';
import ProjectList from '../components/ProjectList';
import TaskForm from '../components/TaskForm';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Fetch projects for the user
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ProjectList projects={projects} onSelect={setSelectedProject} />
      {selectedProject && (
        <div>
          <h2>Tasks for {selectedProject.name}</h2>
          <TaskForm projectId={selectedProject._id} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
