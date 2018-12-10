import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Button, Container, FormInline } from 'mdbreact';
import { Link } from 'react-router-dom';
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
            <Navbar color="transparent" dark expand="md" fixed="top" scrolling>
                <Container>
                    <NavbarBrand href="/">
                        <strong>D-LEARN</strong>
                    </NavbarBrand>
                    {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
                    <Collapse isOpen={this.state.collapse} color="blue" navbar>
                        <NavbarNav left>
                            <NavItem active>
                                <NavLink to="/courses">Courses</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/blog">Blog</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/contactus">Contact us</NavLink>
                            </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                            <NavItem>
                                <Link to="/login"><Button color="white">Login</Button></Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/register"><Button color="primary" >Sign Up</Button></Link>
                            </NavItem>
                            <NavItem>
                                <FormInline waves>
                                    <div className="md-form my-0">
                                        <input
                                            className="form-control mr-sm-2"
                                            type="text"
                                            placeholder="Search"
                                            aria-label="Search"
                                        />
                                    </div>
                                </FormInline>
                            </NavItem>
                        </NavbarNav>

                        {/* <NavbarNav left>
                                <NavItem active>
                                    <NavLink className="nav-link" to="/"><strong>Home</strong></NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink className="nav-link" to="/popular-courses"><strong>Courses</strong></NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink className="nav-link" to="/#contact"><strong>About us</strong></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/#contact"><strong>Contact us</strong></NavLink>
                                </NavItem>
                            </NavbarNav>
                            <NavbarNav right>
                                <NavItem>
                                    <Link to="login"><Button color="white">Login</Button></Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="register"><Button color="primary" >Sign Up</Button></Link>
                                </NavItem>
                            </NavbarNav> */}
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavbarFeatures;