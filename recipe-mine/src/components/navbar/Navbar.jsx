import React, { useState } from "react";
import {
  Nav,
  LogoLink,
  NavbarRight,
  NavbarRightLink,
  NavbarRightIcon,
} from "./NavbarStyle";

const Navbar = () => {
  const [isOpen, setHandleIsOpen] = useState(false);

  const handleGithub = () => {
    window.location.href = "https://github.com/Doganmbd";
  };
  return (
    <div>
      <Nav>
        <LogoLink to="/">
          <i>{"<M.B.D>"}</i>
          <span>RECIPE</span>
        </LogoLink>

        <NavbarRightIcon onClick={() => setHandleIsOpen(!isOpen)}>
          
          <span />
          <span />
          <span />
        </NavbarRightIcon>
        {console.log(isOpen)}
        
          
        <NavbarRight isOpen={isOpen}>
          <NavbarRightLink to="/about">About</NavbarRightLink>
          <NavbarRightLink to="" onClick={handleGithub}>
            Github
          </NavbarRightLink>
          <NavbarRightLink to="/login">Logout</NavbarRightLink>
        </NavbarRight>
      </Nav>
    </div>
  );
};
export default Navbar;
