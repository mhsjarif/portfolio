import React from 'react';
import { Navbar, NavItem, Nav, MenuItem } from 'react-bootstrap';
import './MyNavbar.css';

const MyNavbar = (props) => (
    <Navbar fixedTop className="MyNavbar">
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#home">Home</a>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <NavItem eventKey={1} href="#about-me" className="nav-item">
                About Me
            </NavItem>
            <NavItem eventKey={2} href="#skills" className="nav-item">
                Skills
            </NavItem>
            <NavItem eventKey={2} href="#work" className="nav-item">
                Work
            </NavItem>
            <NavItem eventKey={2} href="#contact" className="nav-item">
                Contact
            </NavItem>
        </Nav>
    </Navbar>
);

export default MyNavbar;