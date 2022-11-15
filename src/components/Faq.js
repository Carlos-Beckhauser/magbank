import React from "react";
import { Container, Row, Col, Accordion, Button } from "react-bootstrap";
import IconText from "./IconText";
import {
  faCreditCard,
  faWallet,
  faUserTie,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Faq = () => (
  <Container>
    <Row>
      <Col className="d-lg-none" xs={12}>
        <Row>
          <Col>
            <FontAwesomeIcon icon={faCreditCard} size="2x" />
          </Col>
          <Col>
            <FontAwesomeIcon icon={faWallet} size="2x" />
          </Col>
          <Col>
            <FontAwesomeIcon icon={faShieldAlt} size="2x" />
          </Col>
          <Col>
            <FontAwesomeIcon icon={faUserTie} size="2x" />
          </Col>
        </Row>
      </Col>
      <Col className="d-none d-lg-block">
        <IconText icon={faCreditCard} size={3}>
          Cartão de crédito e débito
        </IconText>
        <IconText icon={faWallet} size={3}>
          Conta e abertura
        </IconText>
        <IconText icon={faUserTie} size={3}>
          Token digital
        </IconText>
        <IconText icon={faShieldAlt} size={3}>
          Produtos e Serviços
        </IconText>
      </Col>
      <Col>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Lorem ipsum dolor sit amet</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim.
              Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et
              porta magna. Nulla mattis tortor vitae metus vestibulum
              scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque
              placerat ultrices. Proin purus ante, congue vel arcu ac, porta
              condimentum mauris. Maecenas massa orci, fringilla eget fermentum
              nec, dignissim nec diam.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Nulla porttitor eros ac ex tristique posuere
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim.
              Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et
              porta magna. Nulla mattis tortor vitae metus vestibulum
              scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque
              placerat ultrices. Proin purus ante, congue vel arcu ac, porta
              condimentum mauris. Maecenas massa orci, fringilla eget fermentum
              nec, dignissim nec diam.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Quisque fringilla tincidunt arcu
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim.
              Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et
              porta magna. Nulla mattis tortor vitae metus vestibulum
              scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque
              placerat ultrices. Proin purus ante, congue vel arcu ac, porta
              condimentum mauris. Maecenas massa orci, fringilla eget fermentum
              nec, dignissim nec diam.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Nam elementum lobortis purus a maximus tortor
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim.
              Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et
              porta magna. Nulla mattis tortor vitae metus vestibulum
              scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque
              placerat ultrices. Proin purus ante, congue vel arcu ac, porta
              condimentum mauris. Maecenas massa orci, fringilla eget fermentum
              nec, dignissim nec diam.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Row>
  </Container>
);

export default Faq;
