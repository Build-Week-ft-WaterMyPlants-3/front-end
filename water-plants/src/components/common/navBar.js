import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./navBarElements";

function NavBar() {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>

          <NavLink to="/signupForm" activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>

        <NavBtn>
          <NavBtnLink to="/loginForm">Login</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
}

export default NavBar;
