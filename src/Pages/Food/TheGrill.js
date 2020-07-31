import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Food.css';
import SmallIcons from "../../SmallIcons/SmallIcons";

const TheGrill = ({ state }) => {
  return (
    <Container className="body-container">
      <Row className="top-row">
        <Col xs={12} sm={6} className="align-left"><h2>The Grill Snack Bar</h2></Col>
        <Col xs={12} sm={6}><SmallIcons></SmallIcons></Col>
      </Row>
      <Row>
        <Col xs={12} sm={8} className="align-left">
          <Row>
            <Col>
              <img alt="Inside club" src="images/TheGrill-sq.jpg" className="image-left" />
              <br />
              <b>The T-Bolt Cafe</b> is the place to go, pre-game, post-game we are here for you. On your way to the 19th hole? Grab a delicious bite to eat from us on your way.<br />
              <br />
              <b>Got an early Tee Time?</b><br />
              Check out the breakfast menu. Get fueled up before hitting the links. Breafast sandwhich, burrito? How about some biscuits and gravy!?<br />
              <br />
              <b>Playing a mid day round?</b><br />
              Check out the what is coming off the grill to put a smile on your face. A great assorment of beverages for you to chose from as well. Need something light? we got you covered, grab a crisp salad.<br />
            </Col>
          </Row>
          <Row className="top-row">
            <Col className="align-left"><h4>Check out this MENU!</h4></Col>
          </Row>
          <Row>
            <Col className="top-margin">
              <a href="https://lukeevents.com/wp-content/uploads/2016/05/To-go-Menu-5-26-16.pdf" rel="noopener noreferrer" target="_blank"><h5>Download the menu here</h5></a>
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={4}>
          <Row className="right-col-rows map-col">
            <Image alt="map" src="images/TheGrillMap.jpg" />
          </Row>
          <Row xs={9} className="right-col-rows row-ul">
            <Col>
              <h5>Falcon Dunes Grill</h5>
              623-856-0004<br />
              15100 W. Northern Avenue<br />
              Waddell, Arizona, 85355<br />
              <a href="http://www.Facebook.com/LukeGolfCourse" rel="noopener noreferrer" target="_blank">Facebook.com/LukeGolfCourse</a>
            </Col>
          </Row>
          <Row xs={9} className="right-col-rows row-ul">
            <Col>
              <h5>Summer Hours:</h5>
              Sunday-Friday<br />
              5:30am – 1:30pm<br />
              Saturday <br />
              5:30am-3pm<br />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default TheGrill;