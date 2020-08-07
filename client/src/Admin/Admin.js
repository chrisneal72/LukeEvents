import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin.css';

const Home = () => {
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
  console.log(navData)
  return (
    <>
      <Container className="body-container">
        <Row>
          <Col xs={4}>
            <Row>
              <Col xs={12} className="nav-col">
                <Row className="justify-content-md-center">
                  <Col xs={12} className="nav-header">
                    <h2>LukeEvents Admin</h2>
                  </Col>
                </Row>
                <br />
                <Row className="justify-content-md-center">
                  <Col xs={9} className="nav-section">
                    <h3>Edit Navigation</h3>
                  </Col>
                </Row>
                <hr />
                <Row className="justify-content-md-center">
                  <Col xs={9} className="nav-section">
                    <h3>Sections</h3>
                  </Col>
                </Row>
                {navData.map((section, sIdx) => {
                  return (
                    <Row key={sIdx} className="justify-content-md-center">
                      <Col xs={7} className="nav-section">
                        <h4>{section.category}</h4>
                      </Col>
                    </Row>
                  )
                })}
              </Col>
            </Row>
          </Col>
          <Col xs={8}>
            <Row className="justify-content-md-center">
              <Col xs={11} className="body-col">

              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;