import React from 'react';
import Service from './Service';
import Title from './Title';
import '../styles/Services.css';
import { faWallet, faTree, faSocks } from '@fortawesome/free-solid-svg-icons';

function Services() {
    return (
        <div id='Services' className='services'>
            <Title 
                word1={'our'} 
                word2={' services'}
            />

            <div className="services-container">
                <Service 
                    service_title={'Saving Money'} 
                    icon={faWallet}
                />

                <Service 
                    service_title={'Endless Hiking'} 
                    icon={faTree}
                />

                <Service 
                    service_title={'Amazing Comfort'} 
                    icon={faSocks}
                />
            </div>
        </div>
    );
}

export default Services;
