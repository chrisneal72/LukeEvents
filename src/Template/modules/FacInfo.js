import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FacInfoLine from './FacInfoLine';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../template.css';

const FacInfo = (props) => {

  return (
    <>
      {props.info.map((item, sIdx) => {
        return (
          <Row key={sIdx} xs={9} className="right-col-rows row-ul">
            <Col>
              {item.title ? <h5>{item.title}</h5> : ''}
              {item.lines.map((line, idx) => {
                return (
                  <FacInfoLine key={idx} text={line.line} />
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