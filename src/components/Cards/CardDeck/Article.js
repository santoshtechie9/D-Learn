import React from 'react';
import './CardDeck.css';

const article = (props) => {
    var image = props.data.image,
        title = props.data.title,
        subtitle = props.data.subtitle;

    return (
        <figure className="snip1584">
            <img src={image} />
            <figcaption>
                <h3>{title}</h3>
                <h5>{subtitle}</h5>
            </figcaption>
            <a href="#"></a>
        </figure>

    );

}

export default article;