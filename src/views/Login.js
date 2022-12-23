import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Form, Image, Button } from "react-bootstrap";
import logo from "../assets/MAGbank.svg";
import "./Login.scss";

const Login = () => (
  <section className="login">
    <div className="login__container">
      <Row>
        <Col className="text-center">
          <Image src={logo} className="mb-5 " />
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-light fs-5">
                <strong>Número da conta</strong>
              </Form.Label>
              <Form.Control type="number" placeholder="" />
            </Form.Group>

            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Label className="text-light fs-5">
                <strong>Senha</strong>
              </Form.Label>
              <Form.Control type="password" placeholder="" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Link to="/dashboard">
              <Button className="btnStyle" type="submit">
                Criar Conta
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </div>
  </section>
);

export default Login;
