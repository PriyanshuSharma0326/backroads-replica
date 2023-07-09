import React from 'react';
import '../styles/Service.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Service({service_title, icon}) {
    return (
        <div className='service'>
            <div className="service-icon-container">
                <FontAwesomeIcon className='fa-service-icon' icon={icon} />
            </div>

            <div className="service-text">
                <h1 className="service-title">
                    {service_title}
                </h1>

                <h2 className="service-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, incidunt?</h2>
            </div>
        </div>
    )
}

export default Service;
