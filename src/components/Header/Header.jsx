import React from "react";
import logo from "../../assets/images/logo.png";
import "./Header.scss";

function Header() {
  return (
    <section className="header">
      <div className="header__title-wrapper">
        <img className="header__logo" src={logo} alt="personal logo"></img>
      </div>
      <nav className="header__nav">
        <h2 className="header__nav-item">
          <a href="#about" className="header__nav-link">
            Background
          </a>
        </h2>
        <h2 className="header__nav-item">
          <a className="header__nav-link" href="#projects">
            Projects
          </a>
        </h2>
      </nav>
    </section>
  );
}

export default Header;
