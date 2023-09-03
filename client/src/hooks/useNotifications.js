import { useState, useEffect } from 'react';

const useNotifications = (userId) => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${userId}/notifications`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch notifications');
        }
        return res.json();
      })
      .then((data) => {
        setNotifications(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId]);

  return { notifications, loading, error };
};

export default useNotifications;
