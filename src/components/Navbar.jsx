import React from 'react';
import '../styles/Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <nav className='navbar'>
            <div className="navbar-contents">
                <div className="logo-section">
                    <h1>Back<span>Roads</span></h1>
                </div>

                <div className="nav-links">
                    <a href='#Home' className="nav-link">Home</a>
                    <a href='#About' className="nav-link"> About</a>
                    <a href='#Services' className="nav-link">Services</a>
                    <a href='#Featured' className="nav-link">Tours</a>
                </div>

                <div className="socials-section">
                    <FontAwesomeIcon className='fa-icon' icon={faFacebook} />
                    <FontAwesomeIcon className='fa-icon' icon={faTwitter} />
                    <FontAwesomeIcon className='fa-icon' icon={faLinkedin} />
                </div>

                <div className="scrollbar-container">
                    <FontAwesomeIcon className='fa-bars' icon={faBars} />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
