import React from 'react';
import './Project.css';

const Project = (props) => (
    <div className="project">
        <div className="project-image" style={{backgroundImage: `url(${props.image})`}}></div>
        <div className="project-hover">
            <div>{props.title}</div>
            <div>| {props.tech.map(tech => tech + ' | ')}</div>
            <div>{props.description}</div>
            <div className="project-button"><a href={props.github}>GitHub</a></div>
            <div className="project-button"><a href={props.deployed}>View Site</a></div>
        </div>
    </div>
);

export default Project;