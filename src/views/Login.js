import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Form, Image, Button } from "react-bootstrap";
import logo from "../assets/MAGbank.svg";
import "./Login.scss";

const Login = ({ auth, text }) => {
  const [name, setName] = useState();
  const [account, setAccount] = useState();
  const navigate = useNavigate();

  const handleSubmit = () => {
    auth.login(name, account, navigate("/dashboard/*"));
    console.log("submit");
  };

  return (
    <section className="login">
      <div className="login__container">
        <Row>
          <Col className="text-center">
            <Image src={logo} className="mb-5 " />
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-light fs-5">
                  <strong>Nome e Sobrenome</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-light fs-5">
                  <strong>Número da conta</strong>
                </Form.Label>
                <Form.Control
                  type="number"
                  value={account}
                  onChange={(e) => setAccount(e.currentTarget.value)}
                  placeholder=""
                />
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
              <Button className="btnStyle" type="submit" onClick={handleSubmit}>
                {text}
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Login;
