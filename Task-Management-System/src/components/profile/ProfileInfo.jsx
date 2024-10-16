import React from 'react';
import Profile from './Profile.module.css';

const ProfileInfo = ({ profile }) => {
    // const altText = profile.name ? profile.name.charAt(0) : 'P'; // First letter of the name or default 'P'

    return (
        <div className={Profile['profile-info-container']}>
            <h1 className={Profile['profile-header']}>{profile.name || 'Your Profile'}</h1>
            <p className={Profile['profile-info']}>Email: {profile.email || 'No email available'}</p>
            <p className={Profile['profile-info']}>Phone: {profile.phone || 'No phone number available'}</p>

            {/* {profile.profilePicture ? (
                <img
                    src={profile.profilePicture}
                    alt={altText}
                    className={Profile['profile-picture']}
                />
            ) : (
                <div className={Profile['profile-picture-placeholder']}>
                    {altText}
                </div>
            )} */}
        </div>
    );
};

export default ProfileInfo;