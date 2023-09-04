import React from 'react';

const ActivityFeed = ({ activities = [] }) => { // Default value added for activities
    return (
        <section className="activity-feed"> {/* Changed to semantic <section> tag */}
            <h3>Recent Activities</h3>
            <ul>
                {activities.map(activity => (
                    <li key={activity.id}>
                        {/* Sanitize activity.description if it's user-generated */}
                        {activity.description} 
                        <time dateTime={activity.date}> {/* Added semantic <time> tag */}
                            - {new Date(activity.date).toLocaleDateString()}
                        </time>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ActivityFeed;
