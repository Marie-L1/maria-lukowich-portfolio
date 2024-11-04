import React from "react";
import "./Hero.scss";
import myImg from "../../assets/images/personal-img-use.png";
import linkedin from "../../assets/images/linkedin-logo.webp";
import github from "../../assets/images/github-logo.png";

function Hero() {
  return (
    <section className="hero">
      <img className="hero__img" src={myImg} alt="profile image"></img>
      <div className="hero__content-wrapper">
        <h2 className="hero__welcome">Hello, I'm Maria Lukowich</h2>
        <p className="hero__description">
          I'm a Web Developer with a background in Food Research and
          Development and Quality Assurance. My experience with data analysis
          and problem-solving helps me build reliable, efficient software. I’m
          passionate about creating user-friendly applications and excited to
          apply my skills to new challenges in tech.
        </p>
        <h3 className="hero__contact-title">Contact Me!</h3>
        <div className="hero__contact-wrapper">
          <a href="https://www.linkedin.com/in/maria-lukowich/">
            <img className="hero__linkedin-img" src={linkedin}></img>
          </a>
          <a href="https://github.com/Marie-L1">
            <img className="hero__github-img" src={github}></img>
          </a>
          <button
            className="hero__resume-button"
            onClick={() =>
              window.open(
                "/-MARIA-LUKOWICH-RESUME-.pdf",
                "_blank",
                "noopener noreferrer"
              )
            }
          >
            Resume
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
