import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch, FaMoon, FaSun, FaUserCircle } from 'react-icons/fa';
import './navbar.css';

const AppNavbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  return (
    <Navbar bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'} expand="lg" className="app-navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src="/logo.png" alt="Website Logo" height="30" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav>
            <NavDropdown title="Dashboard" id="dashboard-dropdown" renderMenuOnMount>
              {/* <NavDropdown.Item as={Link} to="/dashboard/profile" activeClassName="active">Profile</NavDropdown.Item> */}
              <NavDropdown.Item as={Link} to="/dashboard/beneficiaries" activeClassName="active">Beneficiaries</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dashboard/send-money" activeClassName="active">Send Money</NavDropdown.Item>
              {/* <NavDropdown.Item as={Link} to="/dashboard/transaction-summary" activeClassName="active">Transaction Summary</NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link as={Link} to="/" activeClassName="active">Home</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-success" onClick={handleSearchClick}>
              <FaSearch />
            </Button>
            <NavLink as={Link} to="/dashboard/user/profile" activeClassName="active" className="mr-2">
              <FaUserCircle />
            </NavLink>
            <Button variant="outline-secondary" onClick={toggleDarkMode}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </Button>
          </Nav>
          {showSearch && (
            <Form inline className="search-form">
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;