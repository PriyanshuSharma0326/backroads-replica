import React from 'react';
import Title from './Title';
import '../styles/AboutUs.css';

function AboutUs() {
    return (
        <div id='About' className='about-us'>
            <Title 
                word1={'about'} 
                word2={' us'}
            />

            <div className="about-us-content">
                <div className="about-us-image-container">
                    <img src={require("../media/about-us.jpg")} alt="" className='about-us-image' />
                </div>

                <div className="about-us-text-container">
                    <h1 className="about-us-title">
                        Explore The Difference
                    </h1>

                    <h2 className="about-us-description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis debitis suscipit magnam, excepturi voluptate dolor incidunt. Autem enim ipsam aut.
                        <br />
                        <br />
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis debitis suscipit magnam, excepturi voluptate dolor incidunt. Autem enim ipsam aut.
                    </h2>

                    <button className="read-more-button">
                        read more
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
