import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";

import logo from "../assets/MAGbank.png";
import googleplay from "../assets/googleplay.png";
import applestore from "../assets/applestore.png";

const Footer = () => (
  <footer className="footer">
    <Container className="my-lg-4 mx-lg-4">
      <Row className="text-center py-5 ">
        <Col xs={12} lg={6} className="text-lg-left mb-5 mb-md-0">
          <Image src={logo} />
        </Col>
        <Col xs={12} lg={4} className="mb-5 mb-md-0">
          <Image src={applestore} />
          <Image src={googleplay} className="ml-2 " />
        </Col>
        <Col
          xs={12}
          lg={2}
          className="d-flex align-items-center justify-content-center"
        >
          <FontAwesomeIcon icon={faFacebookSquare} color="#7c7c7c" size="2x" />
          <FontAwesomeIcon
            icon={faTwitter}
            color="#7c7c7c"
            size="2x"
            className="ml-2"
          />
          <FontAwesomeIcon
            icon={faYoutube}
            color="#7c7c7c"
            size="2x"
            className="ml-2"
          />
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
