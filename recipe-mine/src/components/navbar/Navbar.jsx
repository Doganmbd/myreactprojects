import React from 'react';
import {Nav,LogoLink,NavbarRight,NavbarRightLink,NavbarRightIcon} from "./NavbarStyle";



const Navbar = () => {

const handleGithub = () => {

  window.location.href = "https://github.com/Doganmbd"

}
  return (
    <div>
    <Nav>
      <LogoLink to="/">
          <i>{"<M.B.D>"}</i>
          <span>RECIPE</span>
      </LogoLink>

      <NavbarRightIcon>

      </NavbarRightIcon>

      <NavbarRight> 
        <NavbarRightLink to="/about">About</NavbarRightLink>
        <NavbarRightLink to="" onClick={handleGithub}>Github</NavbarRightLink>
        <NavbarRightLink to="/login">Logout</NavbarRightLink>

      </NavbarRight>

    </Nav>
    </div>
  )
}
export default Navbar