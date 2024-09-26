import React from "react";
import "./About.scss";

function About() {
  return (
    <section className="about">
      <div className="about__education-wrapper">
        <h2 className="about__education-title">Education</h2>
        <p className="about__education-item">
          Software Engineer Diploma, BrainStation
        </p>
        <p className="about__education-item">
          Introduction to Programming Using Python, Certificate Harvard CS50
        </p>
        <p className="about__education-item">
          Computer Science, Certificate Harvard CS50
        </p>
        <p className="about__education-item">
          Food Technology, Safety, and Quality Diploma, AAPS
        </p>
        <p className="about__education-item">Culinary Arts Diploma, NAIT</p>
      </div>
    </section>
  );
}

export default About;
