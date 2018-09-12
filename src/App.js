import React, { Component } from 'react';
//import './App.css';
import BasicForm from './components/Forms/BasicForm/BasicForm';
import Circles from './components/Spinners/RotatingCircles/RotatingCircles';
import Dots from './components/Spinners/BouncingCircles/BouncingCircles';
import Squares from './components/Spinners/WanderingSquares/WanderingSquares';
import CubeGrid from './components/Spinners/CubeGrid/CubeGrid';
import Login from './components/Forms/Login/Login';
import Register from './components/Forms/Register/Register';
import DefaultLayout from './containers/MDBLayout/MDBLayout';

class App extends Component {
  render() {
    return (
      <div>
        <DefaultLayout/>
      </div>
    );
  }
}

export default App;
