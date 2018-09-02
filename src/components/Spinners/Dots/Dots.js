import React from 'react';
import './Dots.css';

const dots = (props) => {

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

export default dots;