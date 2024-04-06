// Rectangle.js
import React from 'react';
import './Rectangle.css';

const Rectangle = ({ phoneNumber }) => {
    return (
        <div className="rectangle">
            <a href={`tel:${phoneNumber}`} className="phone-link">
                {phoneNumber}
            </a>
        </div>
    );
};

export default Rectangle;
