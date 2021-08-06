import React from "react";
import "./Work.css";
import Seprator from "../../common/Seprator";
import { WorkData } from "../../data/WorkData";
import WorkCard from "./WorkCard";

function Work() {
  const data = WorkData;

  return (
    <div className="work">
      <Seprator />
      <label className="section-title">Experience</label>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard item={item} />;
        })}
      </div>
    </div>
  );
}

export default Work;
