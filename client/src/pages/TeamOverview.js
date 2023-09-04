import React from 'react';
import useTeam from '../hooks/useTeam';
import MemberList from '../components/MemberList';

const TeamOverview = () => {
    const { teamMembers } = useTeam();

    return (
        <div>
            <h2>Team Overview</h2>
            <MemberList members={teamMembers} />
        </div>
    );
};

export default TeamOverview;
