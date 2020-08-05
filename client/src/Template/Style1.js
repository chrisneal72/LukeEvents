import React, { Component } from 'react';
import { FacebookProvider, Page } from 'react-facebook';
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
      {/* {currentPage.facebook && <FacebookLink path={currentPage.facebook} />} */}
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
          {currentPage.addImages && <Row xs={3} sm={4} md={5} lg={6}>
            <AddImages images={currentPage.addImages} />
          </Row>}
        </Col>
        <Col xs={12} sm={4}>
          {currentPage.mapImage && <MapImage path={currentPage.mapImage} />}
          {currentPage.facInfo && <FacInfo info={currentPage.facInfo} />}
          {currentPage.facebook && <FacebookProvider appId={process.env.REACT_APP_FACEBOOK_APP_ID}>
            <h4>Current Events</h4>
            <Page href={"https://www." + currentPage.facebook} tabs="events" />
          </FacebookProvider>}
        </Col>
      </Row>

    </Container>
  );
}

export default Style1;