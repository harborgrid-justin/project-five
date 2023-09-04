import React from 'react';
import useProfile from '../hooks/useProfile';

const Profile = () => {
    const { user } = useProfile();

    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default Profile;
