import React from "react";
import "./Project.css";
import { ProjectData } from "../../data/ProjectData";
import ProjectCard from "./ProjectCard";
import Seprator from "../../common/Seprator";

function Project() {
  const data = ProjectData;

  return (
    <div className="projects">
      <Seprator />
      <label className="section-title">Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default Project;
