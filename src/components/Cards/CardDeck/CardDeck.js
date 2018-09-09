import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import News from './News';
import './CardDeck.css';

class CardDeck extends Component {

    render() {

        var cards = [
            {
                "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
                "title": "Burgundy",
                "subtitle": "Advertising"
            },
            {
                "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg",
                "title": "Nigel Nigel",
                "subtitle": "Sound & Vision"
            },
            {
                "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg",
                "title": "Caspian",
                "subtitle": "Accounting"
            },
            {
                "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
                "title": "Burgundy",
                "subtitle": "Advertising"
            },
            {
                "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg",
                "title": "Nigel Nigel",
                "subtitle": "Sound & Vision"
            },
            {
                "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg",
                "title": "Caspian",
                "subtitle": "Accounting"
            }
        ];

        return (
            <div >
                <Container className='card-deck-app' fluid>
                    <Row>
                        <Col>
                        <br></br>
                        <br></br>
                        <br></br>
                            <News className='card-deck-app' data={cards} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default CardDeck;