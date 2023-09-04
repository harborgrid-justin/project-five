import React from 'react';

const ProjectTimeline = ({ activities }) => {
    return (
        <div className="project-timeline">
            <h3>Project Timeline</h3>
            <ul>
                {activities.map(activity => (
                    <li key={activity.id}>
                        {activity.description} - {new Date(activity.date).toLocaleDateString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectTimeline;
