import React from "react";
import { Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../template.css';

const ListLink = ({ props }) => {
  return (
    <Col className="top-margin">
      <a href={props.path} rel="noopener noreferrer" target="_blank"><h5>{props.title}</h5></a>
    </Col>
  );
}

export default ListLink;