import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import logo from "../assets/header_logo.png";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <span>
          <img src={logo} alt="header_logo" />
        </span>
        <h1>M-Admin</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
    </>
  );
};

export default Header;
