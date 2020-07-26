import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Food.css';
import SmallIcons from "../../SmallIcons/SmallIcons";

function TBoltCafe() {
  return (
    <Container className="body-container">
      <Row className="top-row">
        <Col xs={12} sm={6} className="align-left"><h2>T-Bolt Cafe</h2></Col>
        <Col xs={12} sm={6}><SmallIcons></SmallIcons></Col>
      </Row>
      <Row>
        <Col xs={12} sm={8} className="align-left">
          <Row>
            <Col>
              <img alt="Inside club" src="images/TBoltCafe-sq.jpg" className="image-left" />
              <br />
              <b>The T-Bolt Cafe</b><br />
              is your go to spot for that quick meal!<br />
              <br />
              <b>Do you have a quick turn coming up?</b><br />
              Order your box lunch and have it waiting for you to pick up. A quick and easy meal to give you more time to get everything done.<br />
              <br />
              <b>Working the late shift?</b><br />
              Get that midnight meal to power you through the night. Quick and easy giving you more time.<br />
            </Col>
          </Row>
          <Row className="top-row">
            <Col className="align-left"><h4>Place your order!</h4></Col>
          </Row>
          <Row>
            <Col className="top-margin">
              <a href="https://www.lukeevents.com/wp-content/uploads/2019/10/T-Bolt-Cafe-Box-Meal-Request-Form.docx" target="_blank"><h5>Download the order form here for your box lunch</h5></a>
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={4}>
          <Row className="right-col-rows map-col">
            <img alt="map" src="images/Club56Map.jpg" />
          </Row>
          <Row xs={9} className="right-col-rows row-ul">
            <Col>
              <h5>T-Bolt Café Flight Kitchen</h5>
              623-856-6420<br />
              Bldg. 954<br />
              <a href="Facebook.com/Hensman-Dining-Facility-Flight-Kitchen" target="_blank">Facebook.com/Hensman-Dining-Facility-Flight-Kitchen</a>
            </Col>
          </Row>
          <Row xs={9} className="right-col-rows row-ul">
            <Col>
              <h5>Monday – Friday</h5>
              Lunch · 11am-1pm<br />
              Dinner · 5-7pm<br />
            </Col>
          </Row>
          <Row xs={9} className="right-col-rows row-ul">
            <Col>
              <h5>Midnight Meal</h5>
              Sunday – Thursday<br />
              11:30pm-1am<br />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default TBoltCafe;