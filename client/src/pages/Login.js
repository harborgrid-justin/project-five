import React, { useState } from 'react';
import useLogin from '../hooks/useLogin';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const { login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        login(credentials);
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={credentials.email} 
                    onChange={e => setCredentials({ ...credentials, email: e.target.value })} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={credentials.password} 
                    onChange={e => setCredentials({ ...credentials, password: e.target.value })} 
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
