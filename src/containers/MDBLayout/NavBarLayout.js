import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Button, Container } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './MDBLayout.css';

class NavbarFeatures extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {

        return (
            <Router>
                <Navbar  color="transparent" dark expand="md" fixed="top" scrolling>
                    <Container>
                    <NavbarBrand href="/">
                        <strong>DLEARN</strong>
                    </NavbarBrand>
                    {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
                    <Collapse isOpen={this.state.collapse} color="blue" navbar>
                        <NavbarNav left>
                            <NavItem active>
                                <NavLink className="nav-link" to="/"><strong>Home</strong></NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink className="nav-link" to="/#popular-courses"><strong>Courses</strong></NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink className="nav-link" to="/#contact"><strong>Contact us</strong></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/#contact"><strong>About us</strong></NavLink>
                            </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                            <NavItem>
                                <Button color="white" >Login</Button>
                            </NavItem>
                            <NavItem>
                                <Button color="primary" >Sign In</Button>
                            </NavItem>
                        </NavbarNav>
                    </Collapse>
                    </Container>
                </Navbar>
            </Router>
        );
    }
}

export default NavbarFeatures;