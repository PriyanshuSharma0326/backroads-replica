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
                {cards.map(card => {
                    return (
                        <TourCard 
                            {...card} 
                            key={card.id}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Featured;
