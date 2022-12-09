import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Image, Button } from "react-bootstrap";
import logo from "../assets/MAGbank.svg";
import "./Login.scss";

const Login = () => (
  <section className="login">
    <div className="login__container">
      <Row>
        <Col className="text-center">
          <Image src={logo} className=" logoStyle" />
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-light fs-5">
                Número da conta
              </Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>

            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Label className="text-light fs-5">Senha</Form.Label>
              <Form.Control type="password" placeholder="" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button className="btnStyle" type="submit">
              Criar Conta
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  </section>
);

export default Login;
