import React from "react";
import Icon from "./Icon";
import "./Stack.scss";
import ReactIcon from "../../img/icons/mdi_react.svg";
import JavaScriptIcon from "../../img/icons/mdi_language-javascript.svg";
import HtmlIcon from "../../img/icons/icon-park-outline_html-five.svg";
import cssIcon from "../../img/icons/material-symbols_css.svg";
import AngularIcon from "../../img/icons/mdi_angular.svg";
import cSharIcon from "../../img/icons/teenyicons_c-sharp-solid.svg";
import phpIcon from "../../img/icons/material-symbols_php.svg";
import nodeIcon from "../../img/icons/fa6-brands_node.svg";

const Stack = () => {
  return (
    <div className="stack">
      <div className="stack__inner">
        <div className="stack__title title">Stack</div>
        <div className="stack__icons">
          <Icon icon={ReactIcon} alt="React" />
          <Icon icon={JavaScriptIcon} alt="Javascript" />
          <Icon icon={HtmlIcon} alt="HTML" />
          <Icon icon={cssIcon} alt="CSS" />
          <Icon icon={AngularIcon} alt="Angular" />
          <Icon icon={cSharIcon} alt="c shar" />
          <Icon icon={phpIcon} alt="php" />
          <Icon icon={nodeIcon} alt="php" />
        </div>
      </div>
    </div>
  );
};

export default Stack;
