import { useState } from 'react';
import api from '../utils/api';

const useLogin = () => {
    const [status, setStatus] = useState('idle');

    const login = async (credentials) => {
        try {
            setStatus('loading');
            const response = await api.post('/auth/login', credentials);
            setStatus('success');
            // Handle successful login, e.g., set token, redirect, etc.
        } catch (error) {
            setStatus('error');
            console.error('Login error', error);
        }
    };

    return { status, login };
};

export default useLogin;
