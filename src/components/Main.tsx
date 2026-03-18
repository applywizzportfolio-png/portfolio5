import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import { profile, social } from "../data";

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profile.avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href={social.github} target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href={social.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>{profile.name}</h1>
          <p>{profile.title}</p>

          <div className="mobile_social_icons">
            <a href={social.github} target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href={social.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;