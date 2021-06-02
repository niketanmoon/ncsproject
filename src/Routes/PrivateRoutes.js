/* Private Route Component */
import React from "react";
import { Redirect, Route } from "react-router-dom";
//Component specific imports
import { getToken } from "../utils";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        getToken() ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

export default PrivateRoute;
