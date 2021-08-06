import React from "react";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a href={project.demo} className="project-link" target="_blank">
              <div className="link-button">
                <i class="fi-rr-globe"></i>Demo
              </div>
            </a>
          )}
          {project.github && (
            <a href={project.github} className="project-link" target="_blank">
              <div className="link-button">
                <i class="devicon-github-original colored"></i>Github
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((item) => {
            return <label className="tag">{item}</label>;
          })}
        </div>
      </div>
      <img src={project.image} className="project-photo" />
    </div>
  );
}

export default ProjectCard;
