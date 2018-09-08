import React from 'react';
import { Row, Col } from 'reactstrap';
import './RotatingCircles.css';

const rotatingCircles = (props) => {

    return (
        <Row>
            <Col>
                <div className="circles-container">
                    <div className="circles-main">
                        <div className="circles-loading"></div>
                    </div>
                </div>
            </Col>
        </Row>
    );

}

export default rotatingCircles;