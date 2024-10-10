import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = ({ userId }) => {
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        phone: '',
        profilePicture: '',
        bio: '',
    });

    const [profilePictureFile, setProfilePictureFile] = useState(null);
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
                alert('Profile updated successfully!');
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

    const altText = profile.name ? profile.name.charAt(0) : 'Pp'; // Use the first letter of the name or 'P' as default

    return (
        <div className="profile-container">
            {loading && <p>Loading...</p>}
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}

            <h1 className="profile-header">{profile.name || 'Your Profile'}</h1>
            <p className="profile-info">Email: {profile.email || 'No email available'}</p>
            <p className="profile-info">Phone: {profile.phone || 'No phone number available'}</p>

            {profile.profilePicture ? (
                <img 
                    src={profile.profilePicture} 
                    alt={altText} 
                    className="profile-picture" 
                />
            ) : (
                <div className="profile-picture-placeholder">
                    {altText}
                </div>
            )}

            <div className="edit-profile-container">
                <h2>Edit Profile</h2>
                <form onSubmit={(e) => { e.preventDefault(); updateProfile(); }}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            value={profile.name}
                            className="edit-profile-input"
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={profile.email}
                            className="edit-profile-input"
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="Phone"
                            value={profile.phone}
                            className="edit-profile-input"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bio">Bio</label>
                        <textarea
                            name="bio"
                            id="bio"
                            placeholder="Bio"
                            value={profile.bio}
                            className="edit-profile-textarea"
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Updating...' : 'Update Profile'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Profile;
