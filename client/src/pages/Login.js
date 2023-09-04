import React, { useState } from 'react';
import useLogin from '../hooks/useLogin';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false); // Added loading state
    const { login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await login(credentials);
            // Handle successful login, e.g., redirect to dashboard
        } catch (error) {
            console.error("Login error:", error);
            // Provide user-friendly feedback for the error
        } finally {
            setLoading(false);
        }
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
                <button type="submit" disabled={loading}> {/* Disable button during login */}
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    );
};

export default Login;
