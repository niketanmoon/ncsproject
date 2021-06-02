import React from "react";
import axios from "axios";
//application level imports
import Routes from "./Routes";
import "./libCss";
import {
  setAuthToken,
  setToken,
  removeToken,
  getToken,
  getRefreshToken,
  setRefreshToken,
  setExpiresAt,
  getExpiryTime,
} from "./utils";

if (getToken()) {
  // Decode token and get user info and exp
  const expiry = getExpiryTime();
  const currentTime = Date.now();
  if (expiry < currentTime) {
    axios
      .post(`api/v1/core/refresh-token/`, {
        refresh_token: getRefreshToken(),
        client_id: "uiuinUBUK81bo78I0t56JUlj2KecHuP9G3QS9HbB",
        grant_type: "refresh_token",
      })
      .then(async (res) => {
        await setAuthToken(res.data.login_data.access_token);
        await setToken(res.data.login_data.access_token);
        await setRefreshToken(res.data.login_data.refresh_token);
        await setExpiresAt(res.data.login_data.expires_in);
      })
      .catch(() => {
        removeToken();
        // eslint-disable-next-line no-undef
        window.location.href = "/signin";
      });
  }
}

const App = () => {
  return (
    <div className="app">
      <Routes />
    </div>
  );
};

export default App;
