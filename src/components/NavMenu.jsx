import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const NavMenu = (props) => {
  const { navItems } = props.config;
  return (
    <>
      <Nav className="me-auto">
        {navItems.map((item, index) => {
          return (
            <Nav.Link key={index} href={`/${item}`}>
              {item}
            </Nav.Link>
          );
        })}
      </Nav>
    </>
  );
};
export default NavMenu;
