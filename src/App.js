import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Row, Col } from 'reactstrap';
import BasicForm from './components/Forms/BasicForm/BasicForm';
import Circles from './components/Spinners/Circles/Circles';
import Dots from './components/Spinners/Dots/Dots';
import Squares from './components/Spinners/Squares/Squares';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to ReactJS Programming</h1>
          </header>
          {/* <h1> Circles Animations</h1> */}
        </div>
        <div>
          <Row>
            <Circles></Circles>
          </Row>
          <Row>
            <Col>
            <Squares></Squares>
            </Col> 
          </Row>
          <Row>
            <Dots></Dots>
          </Row>
          <Row>
            <Col sm={{ size: 'auto', offset: 3 }}>
              <BasicForm></BasicForm>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
