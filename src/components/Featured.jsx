import React from 'react';
import Title from './Title';
import '../styles/Featured.css';
import TourCard from './TourCard';

import { cards } from '../constants/CardDetails';

function Featured() {
    return (
        <div id='Featured' className='featured'>
            <Title 
                word1={'featured'} 
                word2={' tours'}
            />

            <div className="tour-cards-container">
                <TourCard 
                    card_title={'Tibet Adventure'} 
                    location={'Tibet'} 
                    duration={'6'} 
                    price={'2100'}
                />
                <TourCard 
                    card_title={'Best of Java'} 
                    location={'Indonesia'} 
                    duration={'11'} 
                    price={'1400'}
                />
                <TourCard 
                    card_title={'Explore Hong Kong'} 
                    location={'Hong Kong'} 
                    duration={'8'} 
                    price={'5000'}
                />
                <TourCard 
                    card_title={'Kenya Highlights'} 
                    location={'Kenya'} 
                    duration={'20'} 
                    price={'3300'}
                />
            </div>
        </div>
    );
}

export default Featured;
