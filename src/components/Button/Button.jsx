import React from "react";
import "./Button.scss";

const Button = ({ text }) => {
  return (
    <a href="mailto:mnosov622@gmail.com">
      <div className="btn">{text}</div>
    </a>
  );
};

export default Button;
