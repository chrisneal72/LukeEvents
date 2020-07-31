import React from "react";
import { Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../template.css';

const UlList = ({ props }) => {
  return (
    <Col className="top-margin">
      <h5>{props.title}</h5>
      <ul>
        {props.lines.map((line, sIdx) => {
          return (
            <div key={sIdx}>
              {(line.line) && <li>{line.line}</li>}
            </div>
          )
        })}
      </ul>
    </Col>
  );
}

export default UlList;