import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Food.css';
import SmallIcons from "../../SmallIcons/SmallIcons";

const Hensman = ({ state }) => {
  return (
    <Container className="body-container">
      <Row className="top-row">
        <Col xs={12} sm={6} className="align-left"><h2>Hensman Dining Facility</h2></Col>
        <Col xs={12} sm={6}><SmallIcons></SmallIcons></Col>
      </Row>
      <Row>
        <Col xs={12} sm={8} className="align-left">
          <Row>
            <Col>
              <Image alt="Inside club" src="images/DFAC-800.jpg" className="top-margin" fluid />
              <br />
              <b>The Dining Facility</b><br />
              offers a variety of nutritional entrées for all enlisted personnel assigned and TDY to Luke Air Force Base.<br />
              <br />
              <b>Pure Bar Salad Bar</b><br />
              In addition to traditional salad ingredients, a rotating daily selection of
              whole grains, plant-based protein items and other flavorful, healthy, and
              satisfying items are offered.<br />
              <br />
              <b>Specialty Kitchen Hot Line</b><br />
              A myriad of different components is available for Airman to select and
              combine as they see fit, curated combinations of items will be available to
              create a green, healthy, and satisfying meal.<br />
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={4}>
          <Row className="right-col-rows map-col">
            <Image alt="map" src="images/DFAC-Map.jpg" />
          </Row>
          <Row xs={9} className="right-col-rows row-ul">
            <Col>
              <h5>Hensman Dining Facility</h5>
              623-856-6396<br />
              Bldg. 545<br />
              <a href="http://www.Facebook.com/LukeDFAC" rel="noopener noreferrer" target="_blank">Facebook.com/LukeDFAC</a>
            </Col>
          </Row>
          <Row xs={9} className="right-col-rows row-ul">
            <Col>
              <h5>Monday – Friday</h5>
              Breakfast ·  6-8am<br />
              Lunch ·  11am-1pm<br />
              Dinner · 4-6pm<br />
            </Col>
          </Row>
          <Row xs={9} className="right-col-rows row-ul">
            <Col>
              <h5>Weekends & Holidays</h5>
              Brunch · 7am-1pm<br />
              Supper · 4-6pm<br />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Hensman;