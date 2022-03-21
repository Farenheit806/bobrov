import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCounter } from "../../app/redux/cartSlice";
import CartPop from "../CartPop";
import "./navigation.scss";

const Navigation = () => {
  return (
    <header className="header">
      <div className="navigation wrapper">
        <nav>
          <Link to="/">
            <img className="logo" src="./img/logo.svg" alt="logo" />
          </Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
