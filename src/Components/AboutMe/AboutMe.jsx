import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './AboutMe.css';

const AboutMe = (props) => (
    <div className="about-me" id="about-me">
        <div className="sub-header">About Me</div>
        <div className="about-me-body">
        <div className="summary">
            I’m a Developer working in JavaScript, Ruby on Rails, Node.js, React, html, and css. 
            Prior to becoming a developer I used to be a server in a high volume restaurant, where 
            I learned multi-task and keep calm and collected under stressful conditions and appease 
            customer demands. Currently, I’m working on Fire Beauty, a beauty influencer database, 
            in the MERN-stack.
        </div>
            <div className="my-image"></div>
        </div>
    </div>
);

export default AboutMe;