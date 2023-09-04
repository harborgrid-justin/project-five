import React from 'react';
import useDashboard from '../hooks/useDashboard';
import ProjectList from '../components/ProjectList';

const Dashboard = () => {
    const { projects } = useDashboard();

    return (
        <section> {/* Changed to semantic <section> tag */}
            <h2>Dashboard</h2>
            {projects && projects.length > 0 ? (
                <ProjectList projects={projects} />
            ) : (
                <p>No projects available. Start by creating a new project.</p> {/* Added empty state message */}
            )}
        </section>
    );
};

export default Dashboard;
