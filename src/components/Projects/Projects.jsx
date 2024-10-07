import React from "react";
import github from "../../assets/images/github-logo.png";
import ShelfSage from "../../assets/images/SHELFSAGE-logo.png";
import Telus from "../../assets/images/telus-logo.png";
import sword from "../../assets/images/sword.svg"; 
import "./Projects.scss";

function Projects() {
  return (
    <section className="projects">
        <ul className="projects__list">
          <li className="projects__item">
            <h3 className="projects__item-title">ShelfSage</h3>
            <img src={ShelfSage} className="projects__item-img" alt="shelf sage logo" />
            <p className="projects__item-description">A full-stack web app designed for book lovers to effortlessly manage their book collections, track and achieve monthly reading goals, 
            and receive personalized book recommendations based on their reading habits and preferences. 
            The app offers a user-friendly interface and helps readers discover new books tailored to their tastes.</p>
            <p className="projects__item-tech"><span className="projects__tech-title">Tech:</span> React, Express, Node.js, mySQL, RESTFUL APIs, SAAS</p>
            <div className="projects__link-wrapper">
            <h2 className="projects__link-title">Link: <span></span></h2>
              <a href="https://github.com/Marie-L1/ShelfSage-FrontEnd" className="projects__item-link">
                <img className="projects__item-link-img" src={github} alt="github logo" />
              </a>
            </div>
          </li>
          <li className="projects__item">
            <h3 className="projects__item-title">BrainStatin X Telus</h3>
            <img src={Telus} className="projects__item-telus" alt="Telus logo" />
            <p className="projects__item-description">I led backend development during a 24-hour hackathon to build an app that helps families quickly find the best streaming service bundle. 
            The app recommends bundles based on family members’ ages and favorite genres, ensuring personalized content for everyone. I developed the backend API to process user preferences 
            and match them with suitable streaming services in real-time.</p>
            <p className="projects__item-tech"><span className="projects__tech-title">Tech: </span>React, Node.js, Express, Custom Middleware, RESTFUL APIs</p>
            <div className="projects__link-wrapper">
              <h2 className="projects__link-title">Link: <span></span></h2>
              <a href="https://github.com/Marie-L1/methods-industry-project-backend" className="projects__item-link">
                <img className="projects__item-link-img" src={github} alt="github logo" />
              </a>
            </div>
          </li>
          <li className="projects__item">
            <h3 className="projects__item-title">Trivia Quest</h3>
            <img src={sword} className="projects__item-sword" alt="Trivia logo" />
            <p className="projects__item-description">A frontend interactive quiz web app created with React and TypeScript. 
            The app allows users to answer questions related to family-friendly video games, anime, and fantasy themes. 
            The quiz features dynamic question shuffling, scoring, and navigation through different states (quiz, results). </p>
            <p className="projects__item-tech"><span className="projects__tech-title">Tech: </span>React, TypeScript, SCSS, JSON data</p>
            <div className="projects__link-wrapper">
                <h2 className="projects__link-title">Link:</h2>
                <a href="https://trivia-quest-ashy.vercel.app/" className="projects__item-link-one">
                  <h4 className="projects__item-link-one">Trivia Quest, </h4></a>
                <a href="https://github.com/Marie-L1/Trivia-Quest" className="projects__item-link">
                <img className="projects__item-link-img" src={github} alt="github logo" />
                </a>
            </div>
          </li>
        </ul>
    </section>
  );
}

export default Projects;
