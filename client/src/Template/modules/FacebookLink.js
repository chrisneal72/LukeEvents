import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../template.css';

const FacebookLink = (props) => {

  return (
    <>
      <Row>
        <Col xs={12}>
          <br />
          To see current events visit: <a href={"http://www." + props.path} rel="noopener noreferrer" target="_blank"><h3>{props.path}</h3></a>
        </Col>
      </Row>
    </>
  );
}

export default FacebookLink;