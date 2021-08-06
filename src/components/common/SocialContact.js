import React from "react";
import "./SocialContact.css";
import { SocialData } from "../data/SocialData";

function SocialContact() {
  const data = SocialData;

  return (
    <div className="social-contact">
      {data.map((item) => {
        return (
          <a href={item.link} target="_blank">
            <div className="social-icon-div">
              <img
                src={item.icon}
                className="social-icon"
                alt={item.platform}
              />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default SocialContact;
