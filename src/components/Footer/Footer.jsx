import React from "react";
import copyrightIcon from "../../img/icons/material-symbols_copyright-outline.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__copyright">
        <img
          className="footer__copyright-img"
          src={copyrightIcon}
          alt="Copyright Icon"
        />
        <span className="footer__copyright__text">
          2022 Maxim Nosov | Front end developer
        </span>
      </div>
      <div className="footer__rect"></div>
    </div>
  );
};

export default Footer;
