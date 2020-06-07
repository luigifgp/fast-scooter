import React from "react";
import "./header-component.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Scooter_Logo.svg";

const Header = () => (
  <div>
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/About">
          About
        </Link>
        <Link className="option" to="/Products">
          Products
        </Link>
        <Link className="option" to="/How its works">
          How its works
        </Link>
        <Link className="option" to="/Contact">
          Contact
        </Link>
        <Link className="option" to="/JoinUs">
        JoinUs
        </Link>
        <Link className="option" to="/">
          <button type="button" className="button-hd">
            Download App
          </button>
        </Link>
      </div>
    </div>
  </div>
);
export default Header;
