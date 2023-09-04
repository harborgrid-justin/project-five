import React from 'react';
import useSettings from '../hooks/useSettings';
import LabelManager from '../components/LabelManager';

const Settings = () => {
    const { labels } = useSettings();

    return (
        <div>
            <h2>Settings</h2>
            <LabelManager labels={labels} />
        </div>
    );
};

export default Settings;
