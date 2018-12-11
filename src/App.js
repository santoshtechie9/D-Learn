import React, { Component } from 'react';
import DefaultLayout from './containers/MDBLayout/MDBLayout';
import {BrowserRouter as Router} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <DefaultLayout />
        </Router>
      </div>
    );
  }
}

export default App;
