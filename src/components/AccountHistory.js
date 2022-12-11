import React from "react";
import { Col, Table, Tab, Tabs } from "react-bootstrap";

const AccountHistory = ({ data }) => {
  const { history } = data;

  return (
    <Col xs={12} lg={8} className="mt-lg-5 pt-lg-5">
      <h3 className="mt-4">Extrato de conta corrente</h3>

      <Tabs className="mt-5 pt-lg-5" defaultActiveKey="latest">
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
            {history.map(({ date, description, value }) => (
              <tr>
                <td>{date}</td>
                <td>{description}</td>
                <td className="fw-bold">{value}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Tabs>
    </Col>
  );
};

export default AccountHistory;
