import React, { useState } from 'react';
import Profile from './Profile.module.css';

const EditProfileForm = ({ profile, handleInputChange, updateProfile, loading }) => {
    return (
        <div className={Profile['edit-profile-container']}>
            <h2>Edit Profile</h2>
            <form onSubmit={(e) => { e.preventDefault(); updateProfile(); }}>
                <div className={Profile['form-group']}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={profile.name}
                        className={Profile['edit-profile-input']}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className={Profile['form-group']}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={profile.email}
                        className={Profile['edit-profile-input']}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                {/* <div className={Profile['form-group']}>
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="Phone"
                        value={profile.phone}
                        className={Profile['edit-profile-input']}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={Profile['form-group']}>
                    <label htmlFor="bio">Bio</label>
                    <textarea
                        name="bio"
                        id="bio"
                        placeholder="Bio"
                        value={profile.bio}
                        className={Profile['edit-profile-textarea']}
                        onChange={handleInputChange}
                    ></textarea>
                </div> */}
                <button type="submit" className={Profile['submit-button']} disabled={loading}>
                    {loading ? 'Updating...' : 'Update Profile'}
                </button>
            </form>
        </div>
    );
};

export default EditProfileForm;