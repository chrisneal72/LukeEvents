import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as envelope, faMobileAlt as mobilealt, faBookOpen as bookopen } from '@fortawesome/free-solid-svg-icons'
library.add(fab, envelope, mobilealt, bookopen);

function Navigation() {
  return (
    <Navbar className="nav-color" variant="dark" expand="lg">
      <Navbar.Brand href="#home">LukeEvents.com</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Food" id="basic-nav-dropdown">
            <NavDropdown.Item href="ClubFiveSix">Club Five Six</NavDropdown.Item>
            <NavDropdown.Item href="TheBlitzLounge">The Blitz Lounge</NavDropdown.Item>
            <NavDropdown.Item href="TBoltCafe">T-Bolt Cafe</NavDropdown.Item>
            <NavDropdown.Item href="TheGrill">The Grill Snack Bar</NavDropdown.Item>
            <NavDropdown.Item href="Hensman">Hensman Dining Facility</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Family" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Airman and Family Readiness</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Child Development Center</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Family Child Care</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Youth Programs</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Leisure" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Bryant Fitness Center</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Arts & Crafts</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Auto Shop</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Vehicle Storage</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Community Commons</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Library</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Luke Printing</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Silver Wings Pool</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Recreation" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Falcon Dunes Golf Course</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">FamCamp</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">NAF Online Store</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">R4R - Recharge for Resiliency</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Unite</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Trips & Travel" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Fighter Country Inn</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Fort Tuthill</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Information, Tickets & Travel</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Force Support" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Careers - Civilian Personnel</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Careers - NAF Human Resources Office</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Education</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Honor Guard</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Mortuary Affairs</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Private Organizations</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#home">Sponsorship & Advertising</Nav.Link>
          <NavDropdown title="Get Connected" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Calendar</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Email</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Facebook</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Instagram</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Text</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">The Bolt Magazine</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Twitter</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">YouTube</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;