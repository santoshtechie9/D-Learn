import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Container, Jumbotron, Row } from 'reactstrap';

import './Jumbotron.css';

class Jumbotrons extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardBody>
            <Jumbotron className="jumbotron" fluid>
              <Container fluid>
                <h1 className="display-3 jumbotron-text" >Learn To Grow! </h1>
                <p className="lead">Develop a passion for learning. If you do, you will never cease to grow.</p>
              </Container>
            </Jumbotron>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Jumbotrons;
