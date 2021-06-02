import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import axios from "axios";
import { apiUrl } from "../utils";

const Wallet = (props) => {
  const [amount, setAmount] = React.useState("");
  const [transferAmount, setTransferAmount] = React.useState("");
  const [addMoneyError, setAddMoneyError] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [transferMoneyError, setTransferMoneyError] = React.useState("");
  const [transferMoneySuccess, setTransferMoneySuccess] = React.useState("");

  // handle add money feature
  const handleAddMoney = async (event) => {
    event.preventDefault();
    const data = {
      amount: amount,
    };
    try {
      if (amount > 0) {
        const response = await axios.post(
          `${apiUrl}/api/v1/wallet/add-money/`,
          data
        );
        setAmount("");
        setAddMoneyError("");
      } else {
        setAddMoneyError("Amount should be greater than 0");
      }
    } catch (e) {
      console.log("Error");
      console.log(e.response.data.message);
      setAddMoneyError(e.response.data.message);
      setAmount("");
    }
  };

  // handle transfer money feature
  const handleTransferMoney = async (event) => {
    event.preventDefault();
    const data = {
      amount: transferAmount,
      transferred_to_email: email,
    };
    try {
      if (transferAmount > 0) {
        const response = await axios.post(
          `${apiUrl}/api/v1/wallet/transfer-money/`,
          data
        );
        setTransferAmount("");
        setTransferMoneyError("");
        setEmail("");
        setTransferMoneySuccess(response.data.message);
      } else {
        setTransferMoneySuccess("");
        setTransferMoneyError("Amount should be greater than 0");
      }
    } catch (e) {
      console.log("Error");
      console.log(e.response.data.message);
      setTransferMoneySuccess("");
      setTransferMoneyError(e.response.data.message);
      setTransferAmount("");
    }
  };
  return (
    <div className="wallet">
      <Tabs defaultActiveKey="add_money" id="uncontrolled-tab-example">
        <Tab eventKey="add_money" title="Add Money">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="3"></MDBCol>
              <MDBCol md="6">
                <form onSubmit={handleAddMoney}>
                  <p className="h5 text-center mb-4">Add Money</p>
                  <div className="red-text">{addMoneyError}</div>
                  <div className="grey-text">
                    <MDBInput
                      label="Add Money in $"
                      group
                      type="number"
                      validate
                      error="wrong"
                      success="right"
                      value={amount}
                      onChange={(event) => setAmount(event.target.value)}
                      required
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn
                      color="primary"
                      type="submit"
                      disabled={amount > 0 ? false : true}
                    >
                      Add
                    </MDBBtn>
                  </div>
                </form>
              </MDBCol>
              <MDBCol md="3"></MDBCol>
            </MDBRow>
          </MDBContainer>
        </Tab>
        <Tab eventKey="transfer_money" title="Transfer Money">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="3"></MDBCol>
              <MDBCol md="6">
                <form onSubmit={handleTransferMoney}>
                  <p className="h5 text-center mb-4">Transfer Money</p>
                  <div className="red-text">{transferMoneyError}</div>
                  <div className="green-text">{transferMoneySuccess}</div>
                  <div className="grey-text">
                    <MDBInput
                      label="Recipient Email"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                    <MDBInput
                      label="Amount to be transferred"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={transferAmount}
                      onChange={(event) =>
                        setTransferAmount(event.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn color="primary" type="submit">
                      Transfer
                    </MDBBtn>
                  </div>
                </form>
              </MDBCol>
              <MDBCol md="3"></MDBCol>
            </MDBRow>
          </MDBContainer>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Wallet;
