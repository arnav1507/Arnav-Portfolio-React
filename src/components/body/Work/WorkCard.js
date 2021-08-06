import React from "react";
import "./WorkCard.css";

function WorkCard({ item }) {
  return (
    <div className="work-card">
      <img src={item.logo} className="work-logo" />
      <div className="work-info">
        <div className="company-name">{item.company}</div>
        <div className="work-dates">
          <label>{item.joining}</label> - <label>{item.end}</label>
        </div>
        <div className="work-desc">
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
