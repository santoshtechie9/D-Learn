import React from 'react';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'

const defaultHeader = () => {
    return (
        <div>
            <Navbar color="info" light expand="md">
                <NavbarBrand className="text-white" href="/"><strong>EthEducation</strong></NavbarBrand>

                <Nav className="d-md-down-none" navbar>
                    <NavItem>
                        <NavLink className="text-white" href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white">Courses</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white">About us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white">Contact us</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle className="text-white" nav caret>
                            Options
                </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                  </DropdownItem>
                            <DropdownItem>
                                Option 2
                  </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Reset
                  </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Navbar>
        </div>
    );
}

export default defaultHeader;