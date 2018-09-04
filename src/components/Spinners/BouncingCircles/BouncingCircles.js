import React from 'react';
import './BouncingCircles.css';

const bouncingCircles = (props) => {

    return (
        <div className="dots-main">
            <div className="dots-loader">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    );

}

export default bouncingCircles;