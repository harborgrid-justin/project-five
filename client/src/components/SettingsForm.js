import React, { useState } from 'react';
import api from '../utils/api';

const SettingsForm = () => {
    const [settings, setSettings] = useState({ theme: 'light', notifications: true });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/settings', settings);
        } catch (error) {
            console.error('Error updating settings', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Theme:
                <select value={settings.theme} onChange={e => setSettings({ ...settings, theme: e.target.value })}>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </label>
            <label>
                Notifications:
                <input 
                    type="checkbox" 
                    checked={settings.notifications} 
                    onChange={e => setSettings({ ...settings, notifications: e.target.checked })} 
                />
            </label>
            <button type="submit">Save Settings</button>
        </form>
    );
};

export default SettingsForm;
