import React from "react";
import github from "../../assets/images/github-logo.png";
import ShelfSage from "../../assets/images/SHELFSAGE-logo.png";
import Telus from "../../assets/images/telus-logo.png";
import "./Projects.scss";

function Projects() {
  return (
    <section className="projects">
        <ul className="projects__list">
          <li className="projects__item">
            <h3 className="projects__item-title">ShelfSage</h3>
            <img src={ShelfSage} className="projects__item-img" alt="shelf sage logo" />
            <p className="projects__item-description">A full-stack web app that helps book 
            lovers manage their book collection, track their monthly reading goals, and provides personalized recommendations.</p>
            <p className="projects__item-tech"><span className="projects__tech-title">Tech:</span> React, Express, Node.js, mySQL, RESTFUL APIs, SAAS</p>
            <a href="https://github.com/Marie-L1/ShelfSage-FrontEnd" className="projects__item-link">
              <img className="projects__item-link-img" src={github} alt="github logo" />
              </a>
          </li>
          <li className="projects__item">
            <h3 className="projects__item-title">BrainStatin X Telus</h3>
            <img src={Telus} className="projects__item-img" alt="Telus logo" />
            <p className="projects__item-description">I lead the backend production in a 24 hour hackathon. 
                Our app helps families quickly find the best streaming service bundle based on their family
                members’ ages and favorite
                genres. </p>
            <p className="projects__item-tech"><span className="projects__tech-title">Tech: </span>React, Node.js, Express, Custom Middleware, RESTFUL APIs</p>
            <a href="https://github.com/Marie-L1/methods-industry-project-backend" className="projects__item-link">
              <img className="projects__item-link-img" src={github} alt="github logo" />
              </a>
          </li>
  
        </ul>
    </section>
  );
}

export default Projects;
