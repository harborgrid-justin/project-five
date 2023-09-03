import React, { useState, useEffect } from 'react';
import UserList from '../components/UserList';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <UserList users={users} />
    </div>
  );
};

export default AdminDashboard;
