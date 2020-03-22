import React from 'react';

import './SideNav.css';

const sideNav = props => (
    <nav className="side-nav">
        <ul>
            <li><a href="about.html" title="Go to About page">About</a></li>
            <li><a href="projects.html" title="Go to Projects page">Projects</a></li>
            <li><a href="contact.html" title="Go to Contact page">Contact</a></li>
        </ul>
    </nav>
)

export default sideNav;