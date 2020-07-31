import React from "react";
import { Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../template.css';

const List = ({ props }) => {
  return (
    <Col className="top-margin">
      <h5>{props.title}</h5>
      {props.lines.map((line, sIdx) => {
        return (
          <div key={sIdx}>
            {line.line}
          </div>
        )
      })}
    </Col>
  );
}

export default List;