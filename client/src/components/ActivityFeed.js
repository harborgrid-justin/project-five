import React from 'react';

const ActivityFeed = ({ activities }) => {
    return (
        <div className="activity-feed">
            <h3>Recent Activities</h3>
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

export default ActivityFeed;
