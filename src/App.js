import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BasicForm from './components/Forms/BasicForm/BasicForm';
import Circles from './components/Spinners/RotatingCircles/RotatingCircles';
import Dots from './components/Spinners/BouncingCircles/BouncingCircles';
import Squares from './components/Spinners/WanderingSquares/WanderingSquares';
import CubeGrid from './components/Spinners/CubeGrid/CubeGrid';
import Login from './components/Forms/Login/Login';
import Register from './components/Forms/Register/Register';
import DefaultHeader from './components/DefaultLayout/DefaultHeader';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header>
            <DefaultHeader></DefaultHeader>
          </header>
        </div>
        <div >
          <Login></Login>
          <Circles/>
          <Register></Register>
          <Squares></Squares>
          <BasicForm />
          <CubeGrid></CubeGrid>
          <Dots></Dots>
        </div>
      </div>
    );
  }
}

export default App;
