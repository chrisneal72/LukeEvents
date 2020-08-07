import React from "react";
import Image from 'react-bootstrap/Image'
import '../template.css';

const TopImage = (props) => {

  return (
    <>
      <Image alt="top image" src={props.path} className="top-margin" fluid />
      <br />
    </>
  );
}

export default TopImage;