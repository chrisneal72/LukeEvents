import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import TopImage from './modules/TopImage';
import MainImage from './modules/MainImage';
import MapImage from './modules/MapImage';
import FacInfo from './modules/FacInfo';
import FacebookLink from './modules/FacebookLink';
import BodyCopy from './modules/BodyCopy';
import 'bootstrap/dist/css/bootstrap.min.css';
import './template.css';
import SmallIcons from "../SmallIcons/SmallIcons";

const Page = ({ match }) => {

  const [currentPage, setCurrentPage] = useState([]);

  useEffect(() => {
    axios
      .get(`./data/${match.params.pageId}.json`)
      .then(response => {
        setCurrentPage(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [match.params.pageId]);

  return (
    <Container className="body-container">
      <Row className="top-row">
        <Col xs={12} sm={6} className="align-left"><h2>{match.params.pageId}</h2></Col>
        <Col xs={12} sm={6}><SmallIcons></SmallIcons></Col>
      </Row>
      {currentPage.facebook ? <FacebookLink path={currentPage.facebook} /> : ''}
      <Row>
        <Col xs={12} sm={8} className="align-left">
          <Row>
            <Col>
              {currentPage.topImage ? <TopImage path={currentPage.topImage} /> : ''}
              {currentPage.mainImage ? <MainImage path={currentPage.mainImage} /> : ''}
              <br />
              <BodyCopy text={currentPage.bodyCopy} />
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
          {currentPage.mapImage ? <MapImage path={currentPage.mapImage} /> : ''}
          {currentPage.facInfo ? <FacInfo info={currentPage.facInfo} /> : ''}
        </Col>
      </Row>
    </Container>
  );
}

export default Page;