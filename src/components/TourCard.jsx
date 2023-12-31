import React from 'react';
import '../styles/TourCard.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';

function TourCard({image, title, description, location, duration, price}) {
    return (
        <div className='tour-card'>
            <div className="tour-card-image-container">
                <img src={image} alt="" className="tour-card-image" />
            </div>

            <div className="tour-details">
                <h1 className="tour-card-title">{title}</h1>

                <h2 className="tour-card-description">{description}</h2>

                <div className="tour-details-main">
                    <div className="tour-location">
                        <FontAwesomeIcon className='map-icon' icon={faMap} />
                        <h3 className="location">{location}</h3>
                    </div>

                    <h3 className="tour-duration">{duration} days</h3>

                    <h3 className="tour-price">From ${price}</h3>
                </div>
            </div>
        </div>
    );
}

export default TourCard;
