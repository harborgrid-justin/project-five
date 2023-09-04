import React, { useState } from 'react';
import api from '../utils/api';

const Register = () => {
    const [user, setUser] = useState({ name: '', email: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/users/register', user);
            setUser({ name: '', email: '', password: '' });
        } catch (error) {
            console.error('Registration error', error);
        }
    };

    return (
        <div>
            <h2>Register</h2>
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
