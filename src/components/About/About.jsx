import React from "react";

function About() {
  return (
    <section className="about">
      <h2 className="about__title">About Me</h2>
      <div className="about__description-wrapper">
        <p className="about__description"></p>
      </div>
      <div className="about__education-wrapper">
        <h2 className="about__education-title">Education</h2>
        <p className="about__education-item">
          Software Engineer Diploma Candidate, BrainStation
        </p>
        <p className="about__education-item">
          Food Technology, Safety, and Quality Diploma, AAPS
        </p>
        <p className="about__education-item">Culinary Arts Diploma, NAIT</p>
        <p className="about__education-item">
          Introduction to Programming Using Python, Certificate Harvard CS50
        </p>
        <p className="about__education-item">
          Computer Science, Certificate Harvard CS50
        </p>
      </div>
    </section>
  );
}

export default About;
