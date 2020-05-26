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
          <Nav.Link href="/contact">Contact</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
