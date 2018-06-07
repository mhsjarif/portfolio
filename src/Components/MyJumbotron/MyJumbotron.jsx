import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './MyJumbotron.css';

const MyJumbotron = (props) => (
    <Jumbotron className="MyJumbotron" id="home">
        <h1>Hi, my name is Mutiara!</h1>
        <p>(most people call me Tara, though)</p>
        <h3>I'm a Web Developer working in the MERN-Stack</h3>
        <a href="#about-me">
            <img src="https://i.imgur.com/v3dd1O5.png" alt="down arrow"/>
        </a>
    </Jumbotron>
);

export default MyJumbotron;