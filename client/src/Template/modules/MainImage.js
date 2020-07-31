import React from "react";
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../template.css';

const MainImage = (props) => {

  return (
    <>
      <Image alt="main image" src={props.path} className="main-image" rounded fluid />
    </>
  );
}

export default MainImage;