import React from "react"
// react bootstrap
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
// icons
import SyLogo from "../../images/icons/symbol-28.png"

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" className="nav-transparent">
      <Navbar.Brand href="/">
        <p className="logo-text m-0">
          <img className="logo-img" src={SyLogo} alt="not-found" /> BEKO
        </p>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="ml-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/gallery">Gallery</Nav.Link>
          <Nav.Link href="/planets">Planets</Nav.Link>
          <Nav.Link href="/insights">Insights</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
