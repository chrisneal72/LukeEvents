import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as envelope, faMobileAlt as mobilealt, faBookOpen as bookopen } from '@fortawesome/free-solid-svg-icons'
import './Navigation.css';
library.add(fab, envelope, mobilealt, bookopen);

function Navigation() {
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    axios
      .get(`/data/nav.json`)
      .then(response => {
        setNavData(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navbar variant="dark" collapseOnSelect="true" expand="lg" className="nav-color">
        <Navbar.Brand href="/">LukeEvents.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {navData.map((section, sIdx) => {
              return (
                <div key={sIdx}>
                  {section.type === 'link' ? <Nav.Link as={Link} id={sIdx} to={section.path} key={section.id}>{section.category}</Nav.Link> : ''}
                  {section.type === 'dropdown' ? <NavDropdown id={sIdx} title={section.category} key={section.id} className='basic-nav-dropdown'>
                    {section.items.map((item, idx) => {
                      return (
                        <div key={idx}>
                          <NavDropdown.Item id={idx} as={Link} to={item.title}>{item.title}</NavDropdown.Item>
                        </div>
                      )
                    })
                    }
                  </NavDropdown> : ''}
                </div>
              )
            })}
          </Nav>
          {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;