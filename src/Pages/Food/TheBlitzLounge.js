import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Food.css';
import SmallIcons from "../../SmallIcons/SmallIcons";

const TheBlitzLounge = ({ state }) => {
  return (
    <Container className="body-container">
      <Row className="top-row">
        <Col xs={12} sm={6} className="align-left"><h2>The Blitz Lounge</h2></Col>
        <Col xs={12} sm={6}><SmallIcons></SmallIcons></Col>
      </Row>
      <Row>
        <Col xs={12} sm={8} className="align-left">
          <Row>
            <Col>
              <Image alt="Inside club" src="images/129A1280-800px.jpg" className="top-margin" fluid />
              <br />
              <b>The Blitz Lounge</b><br />
              is the spot for food or a get together. Wether you are celebrating a bithday or another special day. Reserve one of our great venues for a great event!<br />
              <br />
              <b>Looking for a fun location?</b><br />
              We have the room to match your Event! We the Airmen's Patio for a breath of fresh air, the Theater for that stunning visual presentation, or our spacious Multipurpose room.<br />
              <br />
              <b>How about decorations?</b><br />
              Our Balloony Tunes store is conveniently located to decorate your event with great prices.<br />
            </Col>
          </Row>
          <Row className="top-row">
            <Col className="align-left"><h4>Reserve Your Room Today</h4></Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} className="top-margin">
              <a href="https://lukeevents.com/wp-content/uploads/2016/12/AM_patio_form.pdf" rel="noopener noreferrer" target="_blank"><h5>Airmen’s Patio</h5></a>
            </Col>
            <Col xs={12} sm={6} className="top-margin">
              <a href="https://lukeevents.com/wp-content/uploads/2016/12/CC_MPR_reservation_form.pdf" rel="noopener noreferrer" target="_blank"><h5>Multipurpose Room</h5></a>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} className="top-margin">
              <a href="https://www.lukeevents.com/wp-content/uploads/2019/10/Theater-Reservation-Request-2.pdf" rel="noopener noreferrer" target="_blank"><h5>Theater Forms</h5></a>
            </Col>
            <Col xs={12} sm={6} className="top-margin">
              <a href="https://www.lukeevents.com/wp-content/uploads/2019/08/Luke-AFB-Theatre-Checklist-as-of-Jan-2019.pdf" rel="noopener noreferrer" target="_blank"><h5>Theater checklist</h5></a>
            </Col>
          </Row>
          <Row>
            <Col className="top-margin">
              <a href="https://www.lukeevents.com/wp-content/uploads/2019/09/Balloon_prices_poster.pdf" rel="noopener noreferrer" target="_blank"><h5>Balloony Tunes Pricing</h5></a>
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={4}>
          <Row className="right-col-rows map-col">
            <Image alt="map" src="images/Club56Map.jpg" />
          </Row>
          <Row xs={9} className="right-col-rows row-ul">
            <Col>
              <h5>The Blitz Lounge</h5>
              623-856-7152<br />
              Bldg. 700<br />
              <a href="http://www.Facebook.com/LukeCommunity" rel="noopener noreferrer" target="_blank">Facebook.com/LukeCommunity</a>
            </Col>
          </Row>
          <Row xs={9} className="right-col-rows row-ul">
            <Col>
              <h5>Monday – Friday</h5>
              Breakfast<br />
              6:30-9am<br />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default TheBlitzLounge;