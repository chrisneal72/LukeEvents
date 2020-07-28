import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = ({ state }) => {
  return (
    <div>
      <Carousel className="body-container" interval={4000}>
        <Carousel.Item>
          <img
            className="w-100"
            src="images\plane2.png"
            alt="First slide"
          />
          {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images\food_cover_photo2.png"
            alt="Third slide"
          />
          {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images\family_cover_photo-1.png"
            alt="Third slide"
          />
          {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images\fun_cover_banner-2.png"
            alt="Third slide"
          />
          {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      <Container className="social-icon-cont">
        <Row>
          <Col xs={4} md={2}>
            <a href="https://www.facebook.com/LukeEvents/" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={['fab', 'facebook-f']} size="3x" />
            </a>
          </Col>
          <Col xs={4} md={2}>
            <a href="https://www.instagram.com/luke_events/" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={['fab', 'instagram']} size="3x" />
            </a>
          </Col>
          <Col xs={4} md={2}>
            <a href="https://twitter.com/luke_events/" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={['fab', 'twitter']} size="3x" />
            </a>
          </Col>
          <Col xs={4} md={2}>
            <a href="https://www.lukeevents.com/category/enewsletter-feature/" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon="envelope" size="3x" />
            </a>
          </Col>
          <Col xs={4} md={2}>
            <a href="https://www.lukeevents.com/category/enewsletter-feature/" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon="mobile-alt" size="3x" />
            </a>
          </Col>
          <Col xs={4} md={2}>
            <a href="https://www.lukeevents.com/the_bolt/" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon="book-open" size="3x" />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;