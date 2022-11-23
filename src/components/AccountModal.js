import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AccountModal = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Abra sua conta</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Seu Nome</Form.Label>
          <Form.Control type="text" placeholder="seu nome" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Seu Email</Form.Label>
          <Form.Control type="text" placeholder="seu email" />
        </Form.Group>

        <Form.Group className="mb-1" controlId="formBasicCity">
          <Form.Label>Sua Cidade</Form.Label>
          <Form.Control as="select">
            <option value={1}>Florianópolis - SC</option>
            <option value={2}>Curitiba - PR</option>
            <option value={3}>São Paulo - SP</option>
            <option value={4}>Rio de Janeiro - RJ</option>
          </Form.Control>
        </Form.Group>
        <Form.Check
          type="checkbox"
          label="Eu li e concordo com os termos de uso"
          id="custom-checkbox"
        />
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Fechar
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Salvar dados
      </Button>
    </Modal.Footer>
  </Modal>
);

export default AccountModal;
