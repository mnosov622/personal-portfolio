import React from "react";
import logo from "../../img/icons/logo.svg";
import "./NavBar.scss";
import LinkedIn from "../../img/icons/cib_linkedin.svg";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <a href="/">
          <div className="nav__logo">
            <p className="nav__logo-name">Maxim Nosov</p>
            <img className="nav__logo-img" src={logo} alt="logo" />
          </div>
        </a>
        <ul className="nav__list">
          <li className="nav__list-item">
            <a href="#">Experience</a>
          </li>
          <li className="nav__list-item">
            <a href="#">Stack</a>
          </li>
          <li className="nav__list-item">
            <a href="#">Projects</a>
          </li>
          <a
            href="https://www.linkedin.com/in/maxim-nosov-828894220/"
            target="_blank"
          >
            <img className="nav__linkedIn" src={LinkedIn} alt="LinkedIn" />
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
