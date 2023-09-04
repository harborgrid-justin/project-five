import React, { useState } from 'react';
import useSignup from '../hooks/useSignup';

const Signup = () => {
    const [userDetails, setUserDetails] = useState({ name: '', email: '', password: '' });
    const { signup } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        signup(userDetails);
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={userDetails.name} 
                    onChange={e => setUserDetails({ ...userDetails, name: e.target.value })} 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={userDetails.email} 
                    onChange={e => setUserDetails({ ...userDetails, email: e.target.value })} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={userDetails.password} 
                    onChange={e => setUserDetails({ ...userDetails, password: e.target.value })} 
                />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
