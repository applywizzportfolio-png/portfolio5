import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import { profile, social } from "../data";

function Footer() {
  return (
    <footer>
      <div>
        <a href={social.github} target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href={social.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href={social.githubRepo} target="_blank" rel="noreferrer">{profile.name}</a> with 💜</p>
    </footer>
  );
}

export default Footer;