import React from 'react';

const MemberList = ({ members }) => {
    return (
        <div className="member-list">
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

export default MemberList;
