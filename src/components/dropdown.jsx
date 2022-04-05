import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Image } from "react-bootstrap";

const Dropdown = (isStudent) => {
  console.log(isStudent);
  const teacher = (
    <NavDropdown
      title="teacher@school.org"
      id="collasible-nav-dropdown"
      className="me-3"
    >
      <NavDropdown.Item href="#action/3.1">student@school.org</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">Settings</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
    </NavDropdown>
  );
  const student = (
    <NavDropdown
      title="student@school.org"
      id="collasible-nav-dropdown"
      className="me-3"
    >
      <NavDropdown.Item href="#teacher">teacher@school.org</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">Settings</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
    </NavDropdown>
  );
  return <Nav>{isStudent ? student : teacher}</Nav>;
};

export default Dropdown;
