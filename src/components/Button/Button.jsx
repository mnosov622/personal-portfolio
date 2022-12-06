import React from "react";
import "./Button.scss";

const Button = ({ text, icon }) => {
  return (
    <div className="button">
      <a href="mailto:mnosov622@gmail.com">
        <div className="btn">{text}</div>
      </a>
    </div>
  );
};

export default Button;
