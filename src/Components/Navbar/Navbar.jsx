import React from "react";
import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import LogoComponent from "../logo/Logo";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div>
      <nav className={navbar ? "header active" : "header"}>
        <span className="nav_icon_sm">
          <FontAwesomeIcon icon={faBars} />
        </span>
        <div className="nav_logo">
          <LogoComponent />
        </div>
        <div className="nav_items">
          <ul>
            <li>
              <a href="$">Docs</a>
            </li>
            <li>
              <a href="$">Pricing</a>
            </li>
            <li>
              <a href="$">Enterprise</a>
            </li>
            <li>
              <a href="$">Blog</a>
            </li>
          </ul>
        </div>
        <div className="nav_sign_in">
          <span>Sign In</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
