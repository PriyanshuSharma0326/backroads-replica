import React from 'react';
import '../styles/HeroSection.css';

function HeroSection() {
    return (
        <div id='Home' className='hero-container'>
            <div className='hero-section'>
            </div>

            <div className="hero-overlay">
            </div>

            <div className="hero-content">
                <h1 className='hero-title'>
                    continue exploring
                </h1>

                <div className="hero-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa mollitia sit esse, necessitatibus, dolore modi voluptatibus quas est optio quia cum voluptas!
                </div>

                <button className="explore-button">
                    explore tours
                </button>
            </div>
        </div>
    );
}

export default HeroSection;
