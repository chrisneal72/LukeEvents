import React from "react";
import { Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../template.css';

const List = ({ props }) => {
  return (
    <Col className="top-margin">
      <h4>{props.title}</h4>
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