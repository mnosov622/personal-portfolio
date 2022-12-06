import React from "react";
import "./ExperienceCard.scss";

const ExperienceCard = ({ title, company, date, duty, stack }) => {
  return (
    <div className="card">
      <div className="card__inner">
        <div className="card__col">
          <h3 className="card__title">{title}</h3>
          <p className="card__company">{company}</p>
          <p className="card__date">{date}</p>
        </div>
        <div className="card__col">
          <p className="card__duty">{duty}</p>
          <p className="card__stack">{stack}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
