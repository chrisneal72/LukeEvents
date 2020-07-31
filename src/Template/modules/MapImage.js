import React from "react";
import Row from "react-bootstrap/Row";
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../template.css';

const MainImage = (props) => {

  return (
    <>
      <Row className="right-col-rows map-col">
        <Image alt="map" src={props.path} rounded />
      </Row>
    </>
  );
}

export default MainImage;