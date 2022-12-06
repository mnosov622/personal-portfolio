import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.scss";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__title title">Projects</div>
      <div className="projects__cards">
        <ProjectCard
          name="Job search"
          about="Website in React for searching vacancies"
          link="https://masterhub.co/"
        />

        <ProjectCard
          name="Spotify clone"
          about="Website in Angular for listening to music with Authentication"
          link="https://spotify-project1.vercel.app/"
        />

        <ProjectCard
          name="Music Project"
          about="Website in C# using ASP.NET with Authorization and Authentication"
          link="https://mnosov-wa-web524-a5.azurewebsites.net/"
        />

        <ProjectCard
          name="Web design"
          about="Web Design of the landing page using Figma"
          link="https://drive.google.com/file/d/1Jy14LzItcCiWPQbPk-e7mMPl3wbqR1BT/view?usp=sharing"
        />
      </div>
    </div>
  );
};

export default Projects;
