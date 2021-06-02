import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import { signUpUser } from "../actions";
import { connect } from "react-redux";

const SignUp = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const handleRegister = async (event) => {
    event.preventDefault();
    const register_data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      confirm_password: confirmPassword,
      mobile_number: mobileNumber,
    };
    props.signUpUser(register_data);
  };
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="3"></MDBCol>
        <MDBCol md="6">
          <form onSubmit={handleRegister}>
            <p className="h5 text-center mb-4">Sign up</p>
            <div className="red-text">{props.errorMessage}</div>
            <div className="grey-text">
              <MDBInput
                label="First Name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
              <MDBInput
                label="Last Name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
              />
              <MDBInput
                label="Your email"
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
                label="Your password"
                icon="lock"
                group
                type="password"
                validate
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <MDBInput
                label="Confirm Password"
                icon="lock"
                group
                type="password"
                validate
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
              />
              <MDBInput
                label="Mobile Number"
                icon="mobile"
                group
                type="number"
                validate
                value={mobileNumber}
                onChange={(event) => setMobileNumber(event.target.value)}
              />
            </div>
            <div className="text-center">
              <MDBBtn color="primary" type="submit">
                Register
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
        <MDBCol md="3"></MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
const mapStateToProps = (state) => {
  return {
    errorMessage: state.SignUpReducer.error,
  };
};
const mapDispatchToProps = {
  signUpUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
