import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import Link from 'next/link';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Resume Site</NavbarBrand>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link href="/">
                  <NavLink>Home</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/about">
                    <NavLink>About</NavLink>
                </Link>
              </NavItem>
            <NavItem>
              <Link href="/projects">
                <NavLink>Projects</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/work">
                <NavLink>Work</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/hobbies">
                <NavLink>Hobbies</NavLink>
              </Link>
            </NavItem>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
        </Navbar>
      </div>
    );
}

export default Example;