import { useState, useEffect } from 'react';
import api from '../utils/api';

const useProjectSettings = (projectId) => {
    const [settings, setSettings] = useState({});

    useEffect(() => {
        const fetchProjectSettings = async () => {
            try {
                const response = await api.get(`/projects/${projectId}/settings`);
                setSettings(response.data);
            } catch (error) {
                console.error('Error fetching project settings', error);
            }
        };

        fetchProjectSettings();
    }, [projectId]);

    return { settings };
};

export default useProjectSettings;
