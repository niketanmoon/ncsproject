import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";
import { signInUser } from "../actions";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (event) => {
    event.preventDefault();
    props.signInUser({ email: email, password: password });
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="3"></MDBCol>
        <MDBCol md="6">
          <Form onSubmit={handleLogin}>
            <p className="h5 text-center mb-4">Login</p>
            <div className="red-text">{props.errorMessage}</div>
            <div className="grey-text">
              <MDBInput
                label="Type your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="text-center">
              <MDBBtn type="submit">Login</MDBBtn>
            </div>
          </Form>
        </MDBCol>
        <MDBCol md="3"></MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    errorMessage: state.SignInReducer.error,
  };
};
const mapDispatchToProps = {
  signInUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
