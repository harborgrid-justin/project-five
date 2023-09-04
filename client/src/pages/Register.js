import React, { useState } from 'react';
import api from '../utils/api';

const Register = () => {
    const [user, setUser] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState(null); // Added error state

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/users/register', user);
            setUser({ name: '', email: '', password: '' });
            // Consider redirecting to login or directly logging in the user
        } catch (error) {
            console.error('Registration error', error);
            setError('Failed to register. Please try again.'); // Set error state
        }
    };

    return (
        <div>
            <h2>Register</h2>
            {error && <p className="error-message">{error}</p>} {/* Display error message */}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={user.name} 
                    onChange={e => setUser({ ...user, name: e.target.value })} 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={user.email} 
                    onChange={e => setUser({ ...user, email: e.target.value })} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={user.password} 
                    onChange={e => setUser({ ...user, password: e.target.value })} 
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
