import React from "react";
import "./About.css";
import "../../common/SocialContact";
import SocialContact from "../../common/SocialContact";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br />
          <span className="info-name">Arnav Ranjan.</span>
          <br /> a <span className="pro1">pro</span>grammer & a{" "}
          <span className="pro1">web</span> developer.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assests/me.png").default}
            className="info-image"
            alt="Arnav Ranjan"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
