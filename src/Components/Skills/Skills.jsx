import React from 'react';
import './Skills.css';

const Skills = (props) => (
    <div className="skills" id="skills">
        <div className="sub-header">Skills</div>
        <div className="skills-list">
        {props.skills.map(skill => <div className="skill">{skill}</div>)}
        </div>
    </div>
)

export default Skills;