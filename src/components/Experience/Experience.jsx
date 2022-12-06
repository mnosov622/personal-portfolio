import React from "react";
import "./Experience.scss";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="experience">
      <div className="experience__inner">
        <h2 className="experience__title title">Experience</h2>
        <ExperienceCard
          title="Front end developer"
          company="Retona"
          date="September 2022 - Present"
          duty="Developed company website"
          stack="HTML, SCSS, Javascript, jQuery, PHP"
        />
        <ExperienceCard
          title="React Developer"
          company="Masterhub"
          date="April 2021 - June  2021"
          duty="Developed UI using React"
          stack="React, Hooks, Router, Redux, SCSS, Express, MongoDB"
        />

        <ExperienceCard
          title="UI developer"
          company="Russian Post"
          date="August 2020 - February 2021"
          duty="Created landing pages"
          stack="HTML, CSS,Javascript, jQuery, Bootstrap 5"
        />
      </div>
    </div>
  );
};

export default Experience;
