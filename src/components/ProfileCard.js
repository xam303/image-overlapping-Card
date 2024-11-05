// src/components/ProfileCard.js
import React from "react";
import "./ProfileCard.css";
import profilePic from "../assets/profilepic.png";

const ProfileCard = () => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={profilePic} alt="Profile" className="profile-image" />
      </div>
      <div className="details-container">
        <h1>Muazam Iqbal</h1>
        <h2>Web Developer</h2>
        <p>
          Code and robots: my two great loves. Web development keeps me busy, AI keeps me
          curious, and when I need a break… I let the robots wreak a little harmless havoc!
        </p>
        <div className="button-container">
          <button className="profile-button">Profile</button>
          <button className="follow-button">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
