import React, { useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Food.css';
import SmallIcons from "../../SmallIcons/SmallIcons";

function ClubFiveSix() {
  return (
    <Container className="body-container">
      <Row className="top-row">
        <Col xs={12} sm={6} className="align-left"><h2>Club Five Six</h2></Col>
        <Col xs={12} sm={6}><SmallIcons></SmallIcons></Col>
      </Row>
      <Row>
        <Col xs={12} sm={8} className="align-left">

        </Col>
        <Col xs={12} sm={24}>
          <Row className="right-col-rows">
            <Image alt="map" src="images/Club56Map.jpg" />
          </Row>
          <Row xs={9} className="right-col-rows row-ul">
            <Col>
              <h5>Club Five Six</h5>
              623-856-6446<br />
              Bldg. 161<br />
              Facebook.com/ClubFiveSix<br />
            </Col>
          </Row>
          <Row xs={9} className="right-col-rows row-ul">
            <Col>
              <h5>Cashier</h5>
              Monday – Friday<br />
              8:30am-1pm<br />
            </Col>
          </Row>
          <Row xs={9} className="right-col-rows row-ul">
            <Col>
              <h5>Lunch</h5>
              Monday – Friday<br />
              11am-1:30pm<br />
            </Col>
          </Row>
          <Row xs={9} className="right-col-rows row-ul">
            <Col>
              <h5>Harlow’s Lounge</h5>
              Wednesday
              4-8pm<br />
            </Col>
          </Row>
          <Row xs={9} className="right-col-rows row-ul">
            <Col>
              <h5>Wingman Wednesday</h5>
              4:30pm-8pm<br />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ClubFiveSix;