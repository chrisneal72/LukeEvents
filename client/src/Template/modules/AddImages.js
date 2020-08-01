import React from "react";
import { Col } from "react-bootstrap";
import ModalImage from "react-modal-image";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../template.css';

const AddImages = (props) => {
  return (
    <Col>
      {props.images.map((image, sIdx) => {
        return (
          <ModalImage key={sIdx}
            className="modal-images"
            small={image.smPath}
            large={image.lgPath}
            alt={image.altText}
          />
        )
      })}
    </Col>
  );
}

export default AddImages;