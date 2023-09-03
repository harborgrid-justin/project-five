import { useState, useEffect } from 'react';

const useAuth = (initialToken) => {
  const [token, setToken] = useState(initialToken);
  const [isAuthenticated, setIsAuthenticated] = useState(!!initialToken);

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
      localStorage.setItem('authToken', token);
    } else {
      setIsAuthenticated(false);
      localStorage.removeItem('authToken');
    }
  }, [token]);

  return {
    token,
    setToken,
    isAuthenticated
  };
};

export default useAuth;
