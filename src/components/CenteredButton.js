import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import "./CenteredButton.scss";

const CenteredButton = ({ children, onClick }) => (
  <Container>
    <Row className="d-flex justify-content-center">
      <Button
        className="my-5 px-5 py-3 btn-centered"
        variant="success"
        size="lg"
        onClick={onClick}
      >
        {children}
      </Button>
    </Row>
  </Container>
);

export default CenteredButton;
