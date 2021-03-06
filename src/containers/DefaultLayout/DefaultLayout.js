import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
//import routes from '../../routes';
import DefaultAside from './DefaultAside';
import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader';

import BasicForm from '../../components/Forms/BasicForm/BasicForm';
import Circles from '../../components/Spinners/RotatingCircles/RotatingCircles';
import Dots from '../../components/Spinners/BouncingCircles/BouncingCircles';
import Squares from '../../components/Spinners/WanderingSquares/WanderingSquares';
import CubeGrid from '../../components/Spinners/CubeGrid/CubeGrid';
import Login from '../../components/Forms/Login/Login';
import Register from '../../components/Forms/Register/Register';
import Jumbotron from '../../components/Jumbotrons/Jumbotrons';
import CardDeck from '../../components/Cards/CardDeck/CardDeck';


class DefaultLayout extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <DefaultHeader />
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed >
            <AppSidebarHeader />
            <AppSidebarForm />
            {/* <AppSidebarNav navConfig={navigation} {...this.props} /> */}
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            {/* <Container fluid> */}
            <Jumbotron></Jumbotron>
            <Dots></Dots>
            <CardDeck></CardDeck>
            <Circles></Circles>l
            {/* <Switch>
                {routes.map((route, idx) => {
                    return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                        <route.component {...props} />
                      )} />)
                      : (null);
                  },
                )}
                <Redirect from="/" to="/dashboard" />
              </Switch> */}
            {/* </Container> */}
          </main>
          <AppAside fixed hidden>
            <DefaultAside />
          </AppAside>
        </div>
        <AppFooter>
          <DefaultFooter />
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
