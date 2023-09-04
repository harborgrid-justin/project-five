import { useState, useEffect } from 'react';
import api from '../utils/api';

const useTeam = () => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        const fetchTeamData = async () => {
            try {
                const response = await api.get('/team');
                setTeamMembers(response.data.members);
            } catch (error) {
                console.error('Error fetching team data', error);
            }
        };

        fetchTeamData();
    }, []);

    return { teamMembers };
};

export default useTeam;
