import React from "react";
import "./Hero.scss";
import PersonalPhoto from "../../img/max 1.jpg";
import Button from "../Button/Button";
import EmailIcon from "../../img/icons/ic_outline-email.svg";

const Hero = () => {
  return (
    <>
      <section className="about">
        <div className="about-me">
          <h1 className="about__title">User Interface Front end developer</h1>
          <div className="about__subtitle">
            Creative front-end developer with more than 2 years of experience in
            enterprise companies and startups.
          </div>
        </div>
        <div className="photo">
          <img src={PersonalPhoto} alt="personal photo" />
        </div>
      </section>
      <Button text="Contact me" icon={EmailIcon} />
    </>
  );
};

export default Hero;
