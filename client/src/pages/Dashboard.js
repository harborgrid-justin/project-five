import React from 'react';
import useDashboard from '../hooks/useDashboard';
import ProjectList from '../components/ProjectList';

const Dashboard = () => {
    const { projects } = useDashboard();

    return (
        <div>
            <h2>Dashboard</h2>
            <ProjectList projects={projects} />
        </div>
    );
};

export default Dashboard;
