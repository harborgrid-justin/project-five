import React from 'react';

const ProjectMembers = ({ members }) => {
    return (
        <div className="project-members">
            <h3>Members</h3>
            <ul>
                {members.map(member => (
                    <li key={member.id}>{member.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectMembers;
