import React from 'react';

import Article from './Article';
import './CardDeck.css';
import Slider from 'react-slick';


const news = (props) => {

    var data = props.data;
    var newsTemplate;
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
    }
    if (data.length > 0) {
        newsTemplate = data.map(function (item, index) {
            return (
                <div key={index}>
                    <Article data={item} />
                </div>
            )
        })
    } else {
        newsTemplate = <p>Please add some cards</p>
    }

    return (
        <div className='news'>
            <Slider {...settings}>
                {newsTemplate}
            </Slider>
            {/* <strong className={'news__count ' + (data.length > 0 ? '' : 'none')}>
                Total cards: {data.length}
            </strong> */}
        </div>
    );
}

export default news;