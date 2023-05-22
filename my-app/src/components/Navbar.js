import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav } from "react-bootstrap";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleSelect = () => {
    setExpanded(false);
  };

  // Close the navbar when a link is clicked and the location changes
  const handleLocationChange = () => {
    setExpanded(false);
  };

  return (
    <BootstrapNavbar expand="lg" expanded={expanded} onToggle={handleToggle}>
      <BootstrapNavbar.Brand as={Link} to="/">My Website</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" activeKey={location.pathname} onSelect={handleSelect}>
          <NavLink className="nav-link" exact to="/" onClick={handleLocationChange}>
            Home
          </NavLink>
          <NavLink className="nav-link" to="/about" onClick={handleLocationChange}>
            About
          </NavLink>
          <NavLink className="nav-link" to="/projects" onClick={handleLocationChange}>
            Projects
          </NavLink>
          <NavLink className="nav-link" to="/contact" onClick={handleLocationChange}>
            Contact
          </NavLink>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
