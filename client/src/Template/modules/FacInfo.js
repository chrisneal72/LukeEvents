import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FacInfoLine from './FacInfoLine';
import '../template.css';

const FacInfo = (props) => {

  return (
    <>
      {props.info.map((item, sIdx) => {
        return (
          <Row key={sIdx} className="right-col-rows row-ul">
            <Col>
              {item.title ? <h5>{item.title}</h5> : ''}
              {item.lines.map((line, idx) => {
                return (
                  <div key={idx}>
                    {line.line ? <FacInfoLine text={line.line} /> : ''}
                  </div>
                )
              })}
            </Col>
          </Row>
        )
      })}
    </>
  );
}

export default FacInfo;