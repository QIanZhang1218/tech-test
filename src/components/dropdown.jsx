import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";

const Dropdown = (props) => {
  const { config, setStatus } = props;
  return (
    <Nav>
      <NavDropdown
        title={config.title}
        id="collasible-nav-dropdown"
        className="me-3"
      >
        <NavDropdown.Item href="#action/3.1" onClick={setStatus}>
          {config.item}
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Settings</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

export default Dropdown;
