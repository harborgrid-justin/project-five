import { useState } from 'react';
import api from '../utils/api';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState(null); // Added error state

    const login = async (credentials) => {
        try {
            const response = await api.post('/auth/login', credentials);
            const token = response.data.token;
            // Store the token securely
            // e.g., localStorage.setItem('auth_token', token);
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Login error', error);
            setError('Failed to login. Please check your credentials and try again.'); // Set error state
        }
    };

    const logout = () => {
        // Clear the token or session data
        // e.g., localStorage.removeItem('auth_token');
        setIsAuthenticated(false);
    };

    return { isAuthenticated, login, logout, error }; // Return error as part of the hook's return value
};

export default useAuth;
