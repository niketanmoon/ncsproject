import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "../axios";
import { getToken } from "../utils";
import { logOutUser } from "../actions";
import { auth } from "../firebase";
import "./Header.css";

const Header = (props) => {
  const [clickedHam, setClickedHam] = useState(false);

  const handleClickHam = () => {
    setClickedHam(!clickedHam);
  };
  const handleLogout = async () => {
    auth.signOut();
    const data = {
      client_id: "uiuinUBUK81bo78I0t56JUlj2KecHuP9G3QS9HbB",
      access_token: localStorage.getItem("access_token"),
    };
    try {
      const response = await axios.post("api/v1/core/logout/", data);
      console.log(response);
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("expires_at");
      window.location.href = "/signin";
    } catch (error) {
      console.log(error);
    }
  };
  console.log(props);
  if (getToken()) {
    return (
      <nav className="header__navbar_items">
        <h1 className="header__logo">NCS</h1>
        <div className="header__menu-icon" onClick={handleClickHam}>
          <i className={clickedHam ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul
          className={
            clickedHam ? "header__nav_menu active" : "header__nav_menu"
          }
        >
          <li onClick={handleClickHam}>
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li onClick={handleClickHam}>
            <Link to="/" className="nav-links">
              About
            </Link>
          </li>
          <li onClick={handleClickHam}>
            <Link to="/" className="nav-links">
              Contact
            </Link>
          </li>
          <li onClick={handleClickHam}>
            <Link to="/wallet" className="nav-links">
              Wallet
            </Link>
          </li>
          <li onClick={handleClickHam}>
            <Link to="/transactions" className="nav-links">
              Transactions
            </Link>
          </li>
          <li onClick={handleClickHam} className="nav-links-mobile">
            <button
              className="btn btn--primary btn--medium"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="header__navbar_items">
        <h1 className="header__logo">NCS</h1>
        <div className="header__menu-icon" onClick={handleClickHam}>
          <i className={clickedHam ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul
          className={
            clickedHam ? "header__nav_menu active" : "header__nav_menu"
          }
        >
          <li onClick={handleClickHam}>
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li onClick={handleClickHam}>
            <Link to="/" className="nav-links">
              About
            </Link>
          </li>
          <li onClick={handleClickHam}>
            <Link to="/" className="nav-links">
              Contact
            </Link>
          </li>
          <li onClick={handleClickHam}>
            <Link to="/signin" className="nav-links-mobile">
              <button className="btn btn--primary btn--medium">Login</button>
            </Link>
          </li>
          <li onClick={handleClickHam}>
            <Link to="/signup" className="nav-links-mobile">
              <button className="btn btn--primary btn--medium">Sign Up</button>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
};

Header.propTypes = {
  logOutUser: PropTypes.func,
};

const mapDispatchToProps = {
  logOutUser,
};

export default connect(null, mapDispatchToProps)(Header);
