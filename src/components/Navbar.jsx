import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <div className='navbar'>
            <div className="logo-section">
                <h1>Back<span>Roads</span></h1>
            </div>

            <ul className="nav-links">
                <li className="nav-link">Home</li>
                <li className="nav-link"> About</li>
                <li className="nav-link">Services</li>
                <li className="nav-link">Tours</li>
            </ul>

            <div className="socials-section">
                <img src="" alt="" className="social-icon" />
                <img src="" alt="" className="social-icon" />
            </div>
        </div>
    );
}

export default Navbar;