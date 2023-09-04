import { useState } from 'react';
import api from '../utils/api';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = async (credentials) => {
        try {
            const response = await api.post('/auth/login', credentials);
            setIsAuthenticated(true);
            // Handle token storage, etc.
        } catch (error) {
            console.error('Login error', error);
        }
    };

    const logout = () => {
        // Handle logout logic, e.g., token removal, etc.
        setIsAuthenticated(false);
    };

    return { isAuthenticated, login, logout };
};

export default useAuth;
