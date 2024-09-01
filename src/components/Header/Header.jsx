import React from 'react'
import logo from "../../assets/images/logo.png"
import "./Header.scss"

function Header() {
  return (
    <section className="header">
        <div className="header__title-wrapper">
            <img className="header__logo" src={logo} alt="personal logo"></img>
            <h1 className="header__title">Maria Lukowich</h1>
        </div>
        <nav className="header__nav">
            <h2 className="header__nav-about" href="#"><a>About Me</a></h2>
            <h2 className="header__nav-projects" href="#"><a>Projects</a></h2>
        </nav>
    </section>
  )
}

export default Header