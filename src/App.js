import React, { Component } from 'react';
import DefaultLayout from './containers/MDBLayout/MDBLayout';
import Login from './components/Forms/Login/Login';
import Register from './components/Forms/Register';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={DefaultLayout}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/register" exact component={Register}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
