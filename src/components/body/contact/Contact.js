import React from "react";
import "./Contact.css";
import Seprator from "../../common/Seprator";
import SocialContact from "../../common/SocialContact";

function Contact() {
  return (
    <div className="contact">
      <Seprator />
      <label className="section-title">Contact Me</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact on any platform!</p>
          <SocialContact />
          <a
            href="mailto:arnavranjan15@gmail.com"
            className="email-me"
            method="post"
            enctype="text/plain"
          >
            📧 EMAIL ME
          </a>
        </div>
        <div className="contact-right">
          <a
            href={require("../../../assests/resume.pdf").default}
            target="_blank"
          >
            <i class="fi-rr-cloud-download download-icon"></i>Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
