import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../template.css';

const BodyCopy = (props) => {

  return (
    <div dangerouslySetInnerHTML={{ __html: props.text }} />
  );
}

export default BodyCopy;