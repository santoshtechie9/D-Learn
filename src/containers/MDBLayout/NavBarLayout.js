import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Button, Container } from 'mdbreact';
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
            <div >
                {/* <Router> */}
                {/* <Navbar color="transparent" dark expand="md" fixed="top" scrolling> */}
                <Navbar color="mdb-color darken-3" dark expand="md" fixed="top" scrolling>
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
                                    <NavLink to="/login"><Button color="white">Login</Button></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/register"><Button color="primary" >Sign Up</Button></NavLink>
                                </NavItem>
                                <NavItem>
                                    {/* <FormInline waves>
                                            <div className="md-form my-0">
                                                <input
                                                    className="form-control mr-sm-2"
                                                    type="text"
                                                    placeholder="Search"
                                                    aria-label="Search"
                                                />
                                            </div>
                                        </FormInline> */}
                                </NavItem>
                            </NavbarNav>
                        </Collapse>
                    </Container>
                </Navbar>
                {/* </Router> */}
            </div>
        );
    }
}

export default NavbarFeatures;