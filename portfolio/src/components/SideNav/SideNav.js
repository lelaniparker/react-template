import React from 'react';

import './SideNav.css';

const sideNav = props => {
    let sideNavClasses = "side-nav";
    if (props.show) {
        sideNavClasses = "side-nav open";
    }

    return (
        <nav className={sideNavClasses}>
            <ul>
                <li><a href="about.html" title="Go to About page">About</a></li>
                <li><a href="projects.html" title="Go to Projects page">Projects</a></li>
                <li><a href="contact.html" title="Go to Contact page">Contact</a></li>
            </ul>
        </nav>
    )
}

export default sideNav;