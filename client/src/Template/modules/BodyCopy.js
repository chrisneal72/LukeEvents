import React from "react";
import '../template.css';

const BodyCopy = (props) => {

  return (
    <div dangerouslySetInnerHTML={{ __html: props.text }} />
  );
}

export default BodyCopy;