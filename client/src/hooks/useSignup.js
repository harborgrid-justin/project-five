import { useState } from 'react';
import api from '../utils/api';

const useSignup = () => {
    const [status, setStatus] = useState('idle');

    const signup = async (userDetails) => {
        try {
            setStatus('loading');
            const response = await api.post('/auth/signup', userDetails);
            setStatus('success');
            // Handle successful signup, e.g., redirect, etc.
        } catch (error) {
            setStatus('error');
            console.error('Signup error', error);
        }
    };

    return { status, signup };
};

export default useSignup;
