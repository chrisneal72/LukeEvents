import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Error404 = (props) => {
  return (
    <Container className="body-container">
      <Row className="top-row">
        <Col>
          <h2>404</h2>
          <h2>{props.page}</h2>
          <h2>Not Found</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default Error404;