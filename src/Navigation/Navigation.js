import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as envelope, faMobileAlt as mobilealt, faBookOpen as bookopen } from '@fortawesome/free-solid-svg-icons'
library.add(fab, envelope, mobilealt, bookopen);

function Navigation(props) {
  return (
    <div>
      <Navbar className="nav-color" variant="dark" expand="lg">
        <Navbar.Brand href="#home">LukeEvents.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {props.navData.map((section, sIdx) => {
              return (
                <div key={sIdx}>
                  {section.type === 'link' ? <Nav.Link href={section.path} key={section.id}>{section.category}</Nav.Link> : ''}
                  {section.type === 'dropdown' ? <NavDropdown title={section.category} key={section.id} id='basic-nav-dropdown'>
                    {section.items.map((item, idx) => {
                      return (
                        <div key={idx}>
                          <NavDropdown.Item key={idx} href={item.path}>{item.title} - {idx}</NavDropdown.Item>
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