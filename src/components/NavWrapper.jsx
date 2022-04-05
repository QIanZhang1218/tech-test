import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import NavMenu from "./NavMenu";
import Dropdown from "./Dropdown";

const teacherEntity = {
  name: "teacher",
  item: "student@school.org",
  title: "teacher@school.org",
  navItems: ["Classes", "Lessons", "Libraries"],
};
const studentEntity = {
  name: "student",
  item: "student@school.org",
  title: "student@school.org",
  navItems: ["Classes", "Assignments"],
};
const NavWrapper = () => {
  const [isStudent, setStudent] = useState(false);
  const setStatus = () => {
    isStudent ? setStudent(false) : setStudent(true);
  };
  const config = isStudent ? studentEntity : teacherEntity;
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="%" className="ms-3">
        <img
          src="../../logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <NavMenu config={config} />
        <Dropdown config={config} setStatus={setStatus} />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavWrapper;
