import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { UlList, ListLink, List } from './';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../template.css';

const AddInfo = ({ props }) => {
  return (
    <>
      <Row className="top-row">
        <Col xs={12} sm={9} className="align-left"><h4>{props.title}</h4></Col>
        {props.button.title && <Col xs={12} sm={3}><Button href={props.button.path} rel="noopener noreferrer" target="_blank">{props.button.title}</Button></Col>}
      </Row>
      <Row xs={1} sm={2}>
        {props.info.map((item, sIdx) => {
          return (
            <div key={sIdx}>
              {item.type === "ulList" && <UlList props={item} />}
              {item.type === "list" && <List props={item} />}
              {item.type === "listLink" && <ListLink props={item} />}
            </div>
          )
        })}
      </Row>
    </>
  );
}

export default AddInfo;