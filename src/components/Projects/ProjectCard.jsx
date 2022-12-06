import React from "react";
import "./ProjectCard.scss";

const ProjectCard = ({ name, about, link }) => {
  return (
    <div className="project-card">
      <div className="project-card__name">{name}</div>
      <div className="project-card__about">{about}</div>
      <a href={link} className="project-card__link" target="_blank">
        Visit
      </a>
    </div>
  );
};

export default ProjectCard;
