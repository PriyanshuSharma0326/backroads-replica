import React from 'react';
import '../styles/Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-links">
                <a href='#Home' className="footer-link">Home</a>
                <a href='#About' className="footer-link"> About</a>
                <a href='#Services' className="footer-link">Services</a>
                <a href='#Featured' className="footer-link">Tours</a>
            </div>

            <div className="footer-socials">
                <FontAwesomeIcon className='footer-icon' icon={faFacebook} />
                <FontAwesomeIcon className='footer-icon' icon={faTwitter} />
                <FontAwesomeIcon className='footer-icon' icon={faLinkedin} />
            </div>

            <div className="meta">
                <p className="copyright1">
                    Copyright © Backroads Travel Tours Company
                </p>

                <p className="copyright2">
                    2023 All Rights Reserved
                </p>
            </div>
        </div>
    );
}

export default Footer;
