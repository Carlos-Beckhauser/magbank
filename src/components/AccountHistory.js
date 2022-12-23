import React from "react";
import { Col, Table, Tab, Tabs } from "react-bootstrap";

const AccountHistory = ({ data }) => {
  const { history } = data;

  return (
    <Col xs={12} lg={8} className="mt-lg-5 pt-lg-5">
      <h3 className="my-4">Extrado de Conta Corrente</h3>
      <Tabs>
        <Tab eventKey="latest">
          <Table striped borderless>
            <thead>
              <tr>
                <th>Data</th>
                <th>Descrição</th>
                <th>Valor(R$)</th>
                <th>Saldo(R$)</th>
              </tr>
            </thead>

            <tbody>
              {history.map(({ date, description, value, balance }) => (
                <tr>
                  <td>{date}</td>
                  <td>{description}</td>
                  <td className="text-danger">{value}</td>
                  <td className="fw-bold">{balance}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </Col>
  );
};

export default AccountHistory;
