import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Image } from "react-bootstrap";

const Dropdown = (props) => {
  console.log(props);

  const teacher = {
    value: "teacher",
    title: "teacher@school.org",
    item: "student@school.org",
  };
  const student = {
    value: "student",
    title: "student@school.org",
    item: "teacher@school.org",
  };

  return (
    <Nav>
      <NavDropdown
        title={props.isStudent ? student.title : teacher.title}
        id="collasible-nav-dropdown"
        className="me-3"
      >
        <NavDropdown.Item href="#action/3.1" onClick={props.setStudent}>
          {props.isStudent ? student.item : teacher.item}
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Settings</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

export default Dropdown;
