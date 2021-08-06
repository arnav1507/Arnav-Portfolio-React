import React from "react";
import About from "./about/About";
import Contact from "./contact/Contact";
import Skill from "./skills/Skill";
import Project from "./projects/Project";
import Work from "./Work/Work";
import "./Body.css";

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>

      <section id="project">
        <Project />
      </section>
      <section id="skills">
        <Skill />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
