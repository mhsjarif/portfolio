import React, { Component } from 'react';
import './Work.css';
import Project from '../Project/Project'

const Work = (props) => {
    let projects = props.projects.map(project =>
            <Project
                title={project.title}
                image={project.image}
                tech={project.tech}
                description={project.description}
                github={project.github}
                deployed={project.deployed}
            />
        )
    return (
        <div className="work" id="work">
            <div className="sub-header">Work</div>
            <div className="projects">
                {projects}
            </div>
        </div>

    )
}

export default Work;