import React from 'react';
import '../styles/Title.css';

function Title({word1, word2}) {
    return (
        <>
            <h1 className='section-title'>{word1}
                <span>{word2}</span>
            </h1>
        </>
    );
}

export default Title