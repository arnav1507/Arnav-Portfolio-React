import React, { useState } from "react";
import "./Header.css";
import Web from "./Web/Web";
import Mobile from "./Mobile/Mobile";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="logo">AR 👨‍💻</div>
      <div className="menu">
        <div className="menu-web">
          <Web />
        </div>
        <div className="menu-mobile">
          <div onClick={() => setIsOpen(!isOpen)}>
            <i class="fi-rr-list menu-icon"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
