import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TopImage, MainImage, MapImage, FacInfo, FacebookLink, BodyCopy, AddImages, AddInfo } from './modules';
import 'bootstrap/dist/css/bootstrap.min.css';
import './template.css';
import SmallIcons from "../SmallIcons/SmallIcons";

const Style1 = ({ currentPage }) => {
  return (
    <Container className="body-container">
      <Row className="top-row">
        <Col xs={12} sm={6} className="align-left"><h2>{currentPage.title}</h2></Col>
        <Col xs={12} sm={6}><SmallIcons></SmallIcons></Col>
      </Row>
      {currentPage.facebook && <FacebookLink path={currentPage.facebook} />}
      <Row>
        <Col xs={12} sm={8} className="align-left">
          <Row>
            <Col>
              {currentPage.topImage && <TopImage path={currentPage.topImage} />}
              {currentPage.mainImage && <MainImage path={currentPage.mainImage} />}
              <br />
              <BodyCopy text={currentPage.bodyCopy} />
            </Col>
          </Row>
          {currentPage.addInfo && <AddInfo props={currentPage.addInfo} />}
        </Col>
        <Col xs={12} sm={4}>
          {currentPage.mapImage && <MapImage path={currentPage.mapImage} />}
          {currentPage.facInfo && <FacInfo info={currentPage.facInfo} />}
        </Col>
      </Row>
      <Row xs={3} sm={4} md={5} lg={6}>
        {currentPage.addImages && <AddImages images={currentPage.addImages} />}
      </Row>
    </Container>
  );
}

export default Style1;