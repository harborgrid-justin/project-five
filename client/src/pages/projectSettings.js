import React from 'react';
import useProjectSettings from '../hooks/useProjectSettings';

const ProjectSettings = ({ projectId }) => {
    const { settings } = useProjectSettings(projectId);

    return (
        <div>
            <h2>Project Settings</h2>
            <p>Project Name: {settings.projectName}</p>
            <p>Visibility: {settings.visibility}</p>
        </div>
    );
};

export default ProjectSettings;
