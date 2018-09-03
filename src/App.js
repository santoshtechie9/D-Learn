import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Row, Col } from 'reactstrap';
import BasicForm from './components/Forms/BasicForm/BasicForm';
import Circles from './components/Spinners/Circles/Circles';
import Dots from './components/Spinners/Dots/Dots';
import Squares from './components/Spinners/Squares/Squares';
import Login from './components/Forms/Login/Login';
import Register from './components/Forms/Register/Register';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to ReactJS Programming</h1>
          </header>
        </div>
        <div>
          <Circles></Circles>
            <Login></Login>
            <Dots></Dots>
            <Register></Register>
            <Squares></Squares>
        </div>
      </div>
    );
  }
}

export default App;
