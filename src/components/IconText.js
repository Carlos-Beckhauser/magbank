import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconText = ({
  children,
  icon,
  size = 1,
  color = "#000",
  className,
  textClassName,
}) => (
  <Row>
    <Col xs={size} className="d-flex justify-content-center">
      <FontAwesomeIcon icon={icon} size={`${size}x`} color={color} />
    </Col>
    <Col xs={12 - size} className={textClassName}>
      {children}
    </Col>
  </Row>
);

export default IconText;