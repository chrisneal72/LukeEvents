import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

function Footer() {
  return (
    <Row className="footer">
      <Col>
        <Row>
          <Col className="footer-col" xs={12} md={6} lg={3}>
            <h5>Luke Air Force Base, AZ</h5>
            <img
              alt="56 FSS Logo"
              width={150}
              height={150}
              src="images\FSS_bull_logo2.png"
            />
          </Col>

          <Col className="footer-col" xs={12} md={6} lg={3}>
            <h5>ABOUT</h5>
            <p><a href="https://lukeevents.com/facilitydirectory/"> Facility Directory</a></p>
            <p><a href="https://forttuthill.com/"> Fort Tuthill</a></p>
            <p><a href="https://lukeevents.com/sponsorship-advertising/ ">Sponsorship &amp; Advertising</a></p>
            <p><a href="https://lukeevents.com/disclaimer-privacy-act-statement-hyperlink/ ">Website Disclaimer</a></p>
          </Col>

          <Col className="footer-col" xs={12} md={6} lg={3}>
            <h5>GET CONNECTED</h5>
            <p><a href="https://www.lukeevents.com/calendar/">Calendar</a></p>
            <p><a href="https://www.lukeevents.com/email/">Email</a></p>
            <p><a href="http://facebook.com/lukeevents">Facebook</a></p>
            <p><a href="https://www.instagram.com/luke_events/">Instagram</a></p>
            <p><a href="https://www.lukeevents.com/email/">Text</a></p>
            <p><a href="https://lukeevents.com/the_bolt/">The Bolt Magazine</a></p>
            <p><a href="https://twitter.com/luke_events/">Twitter</a></p>
            <p><a href="https://www.youtube.com/channel/UClmNrBJZf1cvyIUFGP8NHTw/">YouTube</a></p>
          </Col>

          <Col className="footer-col" xs={12} md={6} lg={3}>
            <h5>RESOURCES</h5>
            <p><a href="http://www.luke.af.mil/">56th Fighter Wing</a></p>
            <p><a href="https://www.my.af.mil/"> Air Force Portal</a></p>
            <p><a href="https://ice.disa.mil/index.cfm?fa=site&amp;site_id=483&amp;dep=DoD">ICE</a></p>
            <p><a href="https://rapids-appointments.dmdc.osd.mil/appointment/building.aspx?Buildingid=533&amp;AspxAutoDetectCookieSupport=1/">ID Card Appointment</a></p>
            <p><a href="http://www.nafjobs.org/">NAF Jobs</a></p>
            <p><a href="http://www.usajobs.org/">USA Jobs</a></p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Footer;