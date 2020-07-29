import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Food.css';
import SmallIcons from "../../SmallIcons/SmallIcons";

const ClubFiveSix = ({ state }) => {
  return (
    <Container className="body-container">
      <Row className="top-row">
        <Col xs={12} sm={6} className="align-left"><h2>Club Five Six</h2></Col>
        <Col xs={12} sm={6}><SmallIcons></SmallIcons></Col>
      </Row>
      <Row>
        <Col xs={12} sm={8} className="align-left">
          <Row>
            <Col>
              <Image alt="Inside club" src="images/Club56-sq.jpg" className="image-left" />
              <br />
              <b>Club Five Six</b><br />
              is your go to spot for dining, entertainment, and special events on Luke Air Force Base!<br />
              <br />
              <b>Want to have fun?</b><br />
              Club Five Six hosts theme parties, satellite-broadcast sporting events, live bands, DJs, bingo nights, karaoke nights, and more. Check the calendar for this months events!<br />
              <br />
              <b>Planning an event?</b><br />
              Club Five Six is your place for great special event planning.  Rooms available at the club include the main lounge, Barcelona room, large ballroom (with a 375 person capacity) and outdoor patio spaces.<br />
            </Col>
          </Row>
          <Row className="top-row">
            <Col xs={12} sm={9} className="align-left"><h4>CLUB MEMBER REWARDS</h4></Col>
            <Col xs={12} sm={3}><Button href="https://www.memberplanet.com/account/usaf" rel="noopener noreferrer" target="_blank">SIGN UP HERE</Button></Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} className="top-margin">
              <h5>Club Five Six</h5>
              <ul>
                <li>$2 off lunch and dinner</li>
                <li>$2 off unit functions</li>
                <li>10% off catering</li>
                <li>$10 off B-Day meal</li>
                <li>Member event pricing</li>
              </ul>
            </Col>
            <Col xs={12} sm={6} className="top-margin">
              <h5>Falcon Dunes</h5>
              <ul>
                <li>10% off green fees</li>
                <li>10% off cart rental</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} className="top-margin">
              <h5>Fort Tuthill</h5>
              <ul>
                <li>$5 off lodging</li>
                <li>$2 off RV sites</li>
              </ul>
            </Col>
            <Col xs={12} sm={6} className="top-margin">
              <h5>Auto Hobby</h5>
              <ul>
                <li>10% off stall fees</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} className="top-margin">
              <h5>Outdoor Recreation</h5>
              <ul>
                <li>10% off rentals</li>
              </ul>
            </Col>
            <Col xs={12} sm={6} className="top-margin">
              <h5>Information, Tickets, and Travel</h5>
              <ul>
                <li>2% off Disney Military Salute Tickets</li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={4}>
          <Row className="right-col-rows map-col">
            <Image alt="map" src="images/Club56Map.jpg" />
          </Row>
          <Row xs={9} className="right-col-rows row-ul">
            <Col>
              <h5>Club Five Six</h5>
              623-856-6446<br />
              Bldg. 161<br />
              <a href="http://www.Facebook.com/ClubFiveSix" rel="noopener noreferrer" target="_blank">Facebook.com/ClubFiveSix</a><br />
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