import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../utils";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getTransactions = async () => {
      const response = await axios.get(
        `${apiUrl}/api/v1/wallet/get-transactions`
      );
      setTransactions(response.data.results);
      console.log(transactions);
    };
    getTransactions();
  }, [transactions]);
  return (
    <div className="transaction">
      <Row>
        {transactions.map((item, i) => (
          <Col xs="3">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Transaction: {i + 1}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {item.transaction_type === "DEBIT" ? (
                    <span className="red-text">DEBIT</span>
                  ) : (
                    <span className="green-text">CREDIT</span>
                  )}
                </Card.Subtitle>
                <Card.Text>
                  <p>Transaction Date: {item.transaction_date}</p>
                  <p>Transaction Reason: {item.transaction_reason} </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Transaction;
