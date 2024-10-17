import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileInfo from './ProfileInfo';
import EditProfileForm from './EditProfileForm';
import Profile from './Profile.module.css';
import { useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';

const ProfileComponent = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const token = useSelector((state) => state.TokenInUse);
    let userData;
    if (token.length) {

        userData = jwtDecode(token);
    }

    return (
        <div className={Profile['profile-container']}>
            {loading && <p>Loading...</p>}
            {error && <p className={Profile['error-message']}>{error}</p>}
            {success && <p className={Profile['success-message']}>{success}</p>}

            {/* Display profile info */}
            <ProfileInfo profile={userData} />
        </div>
    );
};

export default ProfileComponent;
