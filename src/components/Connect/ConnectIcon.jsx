import React from "react";
import "./Connect.scss";

const ConnectIcon = ({ link, alt, icon }) => {
  return (
    <a href={link} target="_blank">
      <img className="icon" src={icon} alt={alt} />
    </a>
  );
};

export default ConnectIcon;
