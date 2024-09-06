import React from "react";
import "./Hero.scss";
import myImg from "../../assets/images/Maria-Lukowich_LI (1).png";
import linkedin from "../../assets/images/linkedin-logo.webp";
import github from "../../assets/images/github-logo.png";

function Hero() {
  return (
    <section className="hero">
      <img className="hero__img" src={myImg} alt="#"></img>
      <h2 className="hero__welcome">Welcome</h2>
      <div className="hero__contact-wrapper">
        <a href="#">
          <img className="hero__linkedin-img" src={linkedin}></img>
        </a>
        <a href="#">
          <img className="hero__github-img" src={github}></img>
        </a>
      </div>
    </section>
  );
}

export default Hero;
