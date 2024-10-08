// const User =require('../models/User');
import React ,{useEffect, useState } from 'react';
import axios from 'axios';

const Profile= ({userId})=>{
    const[profile ,setProfile]=useState({
        name:'',
        email:'',
        phone:'',
        profilePicture:'',
        bio:'',
    });

    const [profilePictureFile,setProfilePictureFile]= useState(null);

    useEffect(()=>{
        axios.get(`/api/profile/${userId}`)
        .then(response => setProfile(response.data))
        .catch(error=> console.error('error fetching the profile', error));

    },[userId]);

    const handleClick= (e)=>{
        const{name ,value }=e.target;
        setProfile((prevProfile)=>({
            ...prevProfile,
            [name]:value,
        }));
    };

    const updateProfile = ()=>{
        axios.put(`/api/profile/${id}`,profile)
        .then(()=>alert('profile updated successfully !'))
        .catch(error=>console.error('error updating profile',error));
    }
    const altText = profile.name ? profile.name.charAt(0) : 'P'; // Use the first letter of the name or 'P' as a default
    return(
    <div className="">
        <h1> {profile.name}</h1>
        <p>Email: {profile.email}</p>
        <p>phone: {profile.phone || 'no phone number available'}</p>
        <p></p>
        <p></p>
        {profile.profilePicture && (
            <img 
            src={profile.profilePicture} 
            alt ={altText}
            className=""
            />
         )}

       <div className="">
          <h2>Edit profile</h2>
          <input
          type="text"
          name="name"
          placeholder="Name"
          value={profile.name}
          className=""
          onChange={handleClick}
          />
          <input
          type="email"
          name="email"
          placeholder="Email"
          value={profile.email}
          className=""
          onChange={handleClick}
          />
          <input
          type="tel"
          name="phone"
          placeholder="phone"
          value={profile.phone}
          className=""
          onChange={handleClick}
          />
          <textarea
          name="bio"
          placeholder="Bio"
          value={profile.bio}
          className=""
          onChange={handleClick}
          />
        
      </div>  
    </div>
    );
};
export default Profile;