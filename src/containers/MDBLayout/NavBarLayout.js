import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem,   Container } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

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
                <Navbar dark expand="lg" fixed="top " scrolling>
                    <Container>
                        <NavbarBrand href="/">
                            <strong>DLearn</strong>
                        </NavbarBrand>
                        {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
                        <Collapse isOpen={this.state.collapse} navbar>
                            <NavbarNav>
                                <NavItem active>
                                    <NavLink className="nav-link" to="#">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="#">Courses</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="#">Contact us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <Dropdown>
                                        <DropdownToggle nav caret>Dropdown</DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem href="#">Action</DropdownItem>
                                            <DropdownItem href="#">Anothercentor Action</DropdownItem>
                                            <DropdownItem href="#">Something else here</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
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