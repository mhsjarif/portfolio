import React from 'react';
import './Contact.css';

const Contact = (props) => (
    <div className="contact" id="contact">
        <div className="sub-header">Contact</div>
        <div className="contact-item-container">
            <a href="mailto:tarasjarif@gmail.com">
                <div className="contact-item">
                    <img src="https://i.imgur.com/2AZbKy7.png" alt="email" />
                    &nbsp;&nbsp;tarasjarif@gmail.com
                </div>
            </a>
            <a href="https://www.linkedin.com/in/mutiarasjarif/" target="_blank">
                <div className="contact-item">
                    <img src="https://i.imgur.com/VQw4WWk.png" alt="linkedin" />
                    &nbsp;&nbsp;linkedin.com/in/mutiarasjarif
                </div>
            </a>
            <a href="https://github.com/mhsjarif" target="_blank">
                <div className="contact-item">
                    <img src="https://i.imgur.com/PPqak8L.png" alt="github" />
                    &nbsp;&nbsp;github.com/mhsjarif
                </div>
            </a>
        </div>
    </div>
);

export default Contact;