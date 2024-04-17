import React from 'react';
import './Heading.css';
import toriiImage from './media/torii.ico';

function Heading() {
    return ( 
        <div className="Heading-container">
            <img src={toriiImage} alt='torii' />
            <h1>MythosJapan</h1>
        </div>  
    );
}

export default Heading;