import React from "react";
import Seprator from "../../common/Seprator";
import { SkillData } from "../../data/SkillData";
import "./Skill.css";

function Skill() {
  const data = SkillData;

  return (
    <div className="skills">
      <Seprator />
      <label className="section-title">Skills</label>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div className="skills-section">
              <label className="skills-section-title">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skill) => {
                  return (
                    <div className="skill-card">
                      <div className="skill-icon">{skill.icon}</div>
                      <label className="skill-name">{skill.name}</label>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skill;
