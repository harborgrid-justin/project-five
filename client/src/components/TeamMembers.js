import React from 'react';

const TeamMembers = ({ members }) => {
    return (
        <div className="team-members">
            <h3>Team Members</h3>
            <ul>
                {members.map(member => (
                    <li key={member.id}>
                        {member.name} - {member.role}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TeamMembers;
