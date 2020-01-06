import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Foodie Passport</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                Navigation
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                        <Link to='/'> Profile
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    Dashboard
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    Passport
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    Settings
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    Log Out
                    </DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
            </Collapse>
        </Navbar>
        </div>
    )
}

export default NavBar;