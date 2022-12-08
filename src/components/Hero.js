import React from "react";
import { Card, Button, Image, Row, Col } from "react-bootstrap";
import logo from "../assets/logo__magic-pay--mobile.png";
import logoDesktop from "../assets/logo__magic-pay.png";
import "./Hero.scss";

const Hero = ({ onClick }) => (
  <Card className="text-center text-light hero">
    <Row className="my-lg-5">
      <Col className="text-lg-end mt-5">
        <Image className="d-lg-none" src={logo} />
        <Image className="d-none d-lg-inline-block" src={logoDesktop} />
      </Col>
      <Col className="text-lg-start my-5">
        <p>Pague suas contas pelo nosso APP</p>
        <Button variant="outline-light" onClick={onClick}>
          Abra sua conta
        </Button>
      </Col>
    </Row>
  </Card>
);

export default Hero;
