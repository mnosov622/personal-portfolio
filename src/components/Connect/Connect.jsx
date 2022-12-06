import React from "react";
import "./Connect.scss";
import LinkedInIcon from "../../img/icons/mdi_linkedin.svg";
import GithubIcon from "../../img/icons/mdi_github.svg";
import InstagramIcon from "../../img/icons/mdi_instagram.svg";
import BlogIcon from "../../img/icons/material-symbols_logo-dev.svg";
import Icon from "../Stack/Icon";
import ConnectIcon from "./ConnectIcon";

const Connect = () => {
  return (
    <div className="connect">
      <div className="connect__title title">Let’s talk with me !</div>
      <div className="connect__text">
        I am open to discuss your projects, improve UI and provide excellent
        software solutions to result in graceful UX.
      </div>
      <div className="connect__icons">
        <ConnectIcon
          icon={LinkedInIcon}
          link="https://www.linkedin.com/in/maxim-nosov-828894220/"
          alt="LinkedIn"
        />
        <ConnectIcon
          icon={GithubIcon}
          link="https://github.com/mnosov622"
          alt="LinkedIn"
        />
        <ConnectIcon
          icon={InstagramIcon}
          link="https://www.instagram.com/max_n87/"
          alt="LinkedIn"
        />
        <ConnectIcon
          icon={BlogIcon}
          link="https://www.instagram.com/max_n87/"
          alt="LinkedIn"
        />
      </div>
    </div>
  );
};

export default Connect;
