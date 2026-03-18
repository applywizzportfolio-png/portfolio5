import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { skills } from "../data";

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>{skills.category1.title}</h3>
                    <p>{skills.category1.description}</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {skills.category1.techStack.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>{skills.category2.title}</h3>
                    <p>{skills.category2.description}</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {skills.category2.techStack.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>{skills.category3.title}</h3>
                    <p>{skills.category3.description}</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {skills.category3.techStack.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;