import React from "react";

function Hero() {
  return (
    <section className="hero">
      <img className="hero__img" src="#" alt="#"></img>
      <h2 className="hero__welcome"></h2>
      <div className="hero__contact-wrapper">
        <h3>Contact Me:</h3>
        <a href="#">
          <img className="hero__linkedin-img" src="#"></img>
        </a>
        <a href="#">
          <img className="hero__github-img"></img>
        </a>
      </div>
    </section>
  );
}

export default Hero;
