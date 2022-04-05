import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Image } from "react-bootstrap";
import "../App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "./dropdown";

const Header = () => {
  const [isStudent, setStudent] = useState(false);
  const teacherNav = (
    <Nav className="me-auto">
      <Nav.Link href="/Classes">Classes</Nav.Link>
      <Nav.Link href="/Lessons">Lessons</Nav.Link>
      <Nav.Link href="/Libraries">Libraries</Nav.Link>
    </Nav>
  );

  const studentNav = (
    <Nav className="me-auto">
      <Nav.Link href="/Classes">Classes</Nav.Link>
      <Nav.Link href="/Assignments">Assignments</Nav.Link>
    </Nav>
  );

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="%" className="ms-3">
          <img
            src="../../logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="{this.props.brand.text}"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {isStudent ? studentNav : teacherNav}
          {/* {studentNav} */}
          <Dropdown isStudent={isStudent} />
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Header;
