import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppSidebarToggler } from '@coreui/react';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        {/* <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        /> */}
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#/users">Courses</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#">About us</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#">Contact us</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem className="px-1">
            <Button block outline color="info">Login</Button>
          </NavItem>
          <NavItem className="px-1">
            <Button block color="info">Register</Button>
          </NavItem>
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
