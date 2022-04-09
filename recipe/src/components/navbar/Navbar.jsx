import React, { useState } from 'react';
import { Nav, Logo, Hamburger, MenuLink, Menu } from './NavbarStyles';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo  to="/" >
        <i>{'<M.B.D>'}</i>
        <span>recipe</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
        
      </Hamburger>

      <Menu isOpen={isOpen}>
        <MenuLink to="/about" onClick={() => setIsOpen(!isOpen)}>About</MenuLink>
        <MenuLink
          onClick={() =>
            (window.location.href =
              'https://github.com/orgs/clarusway/dashboard')
          }
          to=""
        >
          Github
        </MenuLink>
        <MenuLink to="/login" onClick={() => setIsOpen(!isOpen)}>Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
