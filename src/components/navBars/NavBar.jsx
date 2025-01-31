import React, { useContext, useState } from "react";
import "./NavBar.css";
import { assests } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
const NavBar = ({ loginState, setLoginState }) => {
    const {loggedin,setLoggedin}=useContext(StoreContext);
  return (
    <div className="navbar">
      <div className="navbar-right">
        <Link to="/">
          {" "}
          <img src={assests.logo} style={{ height: "40px" }} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-middle">
        <ul className="navbar-menu">
          <li>home</li>
          <li>menu</li>
          <li>contact</li>
          <li>feedback</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={assests.search} style={{ height: "40px" }} alt="Search" />
        <Link to="/Cart">
          {" "}
          <img src={assests.cart} style={{ height: "40px" }} alt="cart" />{" "}
        </Link>
        {loggedin ? (
          <button
            className="txt"
            onClick={() => {
              setLoginState(true);
              setLoggedin(false);
            }}
          >
            Login
          </button>
        ) : (
          <img src={assests.profile_icon} alt="Profile" />
        )}
      </div>
    </div>
  );
};

export default NavBar;
