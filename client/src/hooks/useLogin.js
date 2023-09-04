import { useState } from 'react';
import api from '../utils/api';

const useLogin = () => {
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null); // Added error state

    const login = async (credentials) => {
        try {
            setStatus('loading');
            const response = await api.post('/auth/login', credentials);
            const token = response.data.token;
            // Store the token securely
            // e.g., localStorage.setItem('auth_token', token);
            setStatus('success');
        } catch (error) {
            setStatus('error');
            console.error('Login error', error);
            setError('Failed to login. Please check your credentials and try again.'); // Set error state
        }
    };

    return { status, login, error }; // Return error as part of the hook's return value
};

export default useLogin;
