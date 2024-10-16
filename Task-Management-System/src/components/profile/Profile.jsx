import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileInfo from './ProfileInfo';
import EditProfileForm from './EditProfileForm';
import Profile from './Profile.module.css';

const ProfileComponent = ({ userId }) => {
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        phone: '',
        profilePicture: '',
        bio: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get(`/api/profile/${userId}`)
            .then(response => {
                setProfile(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching the profile', error);
                setError('Failed to fetch profile data.');
                setLoading(false);
            });
    }, [userId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    const updateProfile = () => {
        setLoading(true);
        axios.put(`/api/profile/${userId}`, profile)
            .then(() => {
                setSuccess('Profile updated successfully!');
                setError(null);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error updating profile', error);
                setError('Failed to update profile.');
                setSuccess(null);
                setLoading(false);
            });
    };

    return (
        <div className={Profile['profile-container']}>
            {loading && <p>Loading...</p>}
            {error && <p className={Profile['error-message']}>{error}</p>}
            {success && <p className={Profile['success-message']}>{success}</p>}

            {/* Display profile info */}
            <ProfileInfo profile={profile} />

            {/* Edit profile form */}
            <EditProfileForm 
                profile={profile} 
                handleInputChange={handleInputChange} 
                updateProfile={updateProfile}
                loading={loading}
            />
        </div>
    );
};

export default ProfileComponent;
