import React from "react";
import { Col } from "react-bootstrap";
import ModalImage from "react-modal-image";
import LazyLoad from "react-lazyload";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../template.css';

const AddImages = (props) => {
  return (
    <Col>
      {props.images.map((image, sIdx) => {
        return (
          <LazyLoad key={sIdx}>
            <ModalImage
              className="modal-images"
              small={image.smPath}
              large={image.lgPath}
              alt={image.altText}
            />
          </LazyLoad>
        )
      })}
    </Col>
  );
}

export default AddImages;