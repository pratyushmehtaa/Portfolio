import React from "react";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { projectData } from "./Projects-data/Projects";
import "./Projects.css";

function ProjectCards() {
  return (
    <div className="project-cards-wrapper" id ="projects">
  <div className="projects-heading">
    <div className="projects-bar" />
    <h2 className="projects-title">My Recent Works</h2>
    <div className="projects-bar" />
  </div>
  <p className="projects-subheading">
    Here are a few projects I've worked on recently.
  </p>

  <div className="projects-tinted-outer">
    <div className="projects-grid">
      {projectData.map((project, index) => (
        <div className="project-card-wrapper" key={index}>
          <div className="project-card">
            <img
              src={project.imgPath}
              alt={project.title}
              className="project-image"
            />
            <h3 className="project-card-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-buttons">
              <a href={project.ghLink} target="_blank" rel="noreferrer" className="btn-glow">
                <BsGithub /> GitHub
              </a>
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noreferrer" className="btn-glow">
                  <CgWebsite /> Demo
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
}

export default ProjectCards;
