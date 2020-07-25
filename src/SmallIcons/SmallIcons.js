import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SmallIcons.css';

function SmallIcons() {
  return (
    <Container className="social-icon-cont">
      <Row>
        <Col>
          <a href="https://www.facebook.com/LukeEvents/" target="_blank">
            <FontAwesomeIcon icon={['fab', 'facebook-f']} size="2x" />
          </a>
        </Col>
        <Col>
          <a href="https://www.instagram.com/luke_events/" target="_blank">
            <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
          </a>
        </Col>
        <Col>
          <a href="https://twitter.com/luke_events/" target="_blank">
            <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
          </a>
        </Col>
        <Col>
          <a href="https://twitter.com/luke_events/" target="_blank">
            <FontAwesomeIcon icon={['fab', 'youtube']} size="2x" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default SmallIcons;