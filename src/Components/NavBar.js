import React, { useContext } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { CurrentUserContext } from '../Contexts/CurrentUserContext'

const NavBar = () => {

  const { currentUser } = useContext(CurrentUserContext)

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Game Grammar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          { currentUser ? 
            <Nav.Link href="/">Home</Nav.Link> : <Nav.Link href="/login">Login</Nav.Link>
          }
          <Nav.Link href="/users">Users</Nav.Link>
          <Nav.Link href="/games">Games</Nav.Link>
          <NavDropdown title="More Options" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar