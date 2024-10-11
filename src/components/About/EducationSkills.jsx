import React, { useState } from "react";
import "./EducationSkills.scss";
import chef from "../../assets/icons/chef-img.svg";
import dev from "../../assets/icons/dev-img.svg";
import dataAnalysis from "../../assets/icons/data-analysis-img.svg";
import researchSummary from "../../assets/icons/research-summary-img.svg";
import formulation from "../../assets/icons/formulation-img.svg";
import quality from "../../assets/icons/quality-img.svg";
import python from "../../assets/icons/python-img.svg";
import javascript from "../../assets/icons/javascript-img.svg";
import reactLogo from "../../assets/icons/react-img.svg";
import express from "../../assets/icons/express.svg";
import node from "../../assets/icons/node-img.svg";
import django from "../../assets/icons/django-img.svg";
import sass from "../../assets/icons/sass-img.svg";
import auth from "../../assets/icons/authentication-img.svg";
import deploy from "../../assets/icons/deployment-img.svg";
import sql from "../../assets/icons/SQL.svg";
import api from "../../assets/icons/api-img.svg";
import problem from "../../assets/icons/circle-question-svgrepo-com.svg";
import light from "../../assets/icons/lightbulb.svg";
import postman from "../../assets/icons/postman-svgrepo-com.svg";
import media from "../../assets/icons/instagram.svg";

function EducationSkills() {
  const [activeSection, setActiveSection] = useState("education");

  return (
    <div className="about" id="about">
      <div className="tabs">
        <button
          onClick={() => setActiveSection("education")}
          className={activeSection === "education" ? "active" : ""}
        >
          Education
        </button>
        <button
          onClick={() => setActiveSection("skills")}
          className={activeSection === "skills" ? "active" : ""}
        >
          Skills
        </button>
      </div>
      <div className="about__wrapper">
        {activeSection === "education" && (
          <ul className="about__education">
            <div className="about__education-wrapper">
              <h2 className="about__education-title">Education</h2>
              <div className="about__education-sides">
                <div className="about__education-left">
                  <li className="about__education-item">
                    <img
                      className="about__education-img"
                      src={dev}
                      alt="aaps logo"
                    />
                    <h3 className="about__skills-name">
                      Software Engineer Diploma, BrainStation
                    </h3>
                  </li>
                  <li className="about__education-item">
                    <img
                      className="about__education-img"
                      src={dev}
                      alt="aaps logo"
                    />
                    <h3 className="about__skills-name">
                      Introduction to Python, Certificate Harvard CS50
                    </h3>
                  </li>
                  <li className="about__education-item">
                    <img
                      className="about__education-img"
                      src={dev}
                      alt="aaps logo"
                    />
                    <h3 className="about__skills-name">
                      Computer Science, Certificate Harvard CS50
                    </h3>
                  </li>
                </div>
                <div className="about__education-right">
                  <li className="about__education-item">
                    <img
                      className="about__education-img"
                      src={chef}
                      alt="aaps logo"
                    />
                    <h3 className="about__skills-name">
                      Food Technology, Safety, and Quality Diploma, AAPS
                    </h3>
                  </li>
                  <li className="about__education-item">
                    <img
                      className="about__education-img"
                      src={chef}
                      alt="aaps logo"
                    />
                    <h3 className="about__skills-name">
                      Food Fermentation Certificate, HarvardX
                    </h3>
                  </li>
                  <li className="about__education-item">
                    <img
                      className="about__education-img"
                      src={chef}
                      alt="aaps logo"
                    />
                    <h3 className="about__skills-name">
                      Culinary Arts Diploma, NAIT
                    </h3>
                  </li>
                </div>
              </div>
            </div>
          </ul>
        )}
        {activeSection === "skills" && (
          <ul className="about__skills">
            <div className="about__skills-wrapper">
              <h2 className="about__skills-title">Research and Development</h2>
              <div className="about__skills-sides">
                <div className="about__skills-left">
                  <li className="about__skills-item">
                    <img
                      className="about__skills-img"
                      src={light}
                      alt="problem logo"
                    />
                    <h3 className="about__skills-name">Problem Solving</h3>
                  </li>
                  <li className="about__skills-item">
                    <img
                      className="about__skills-img"
                      src={dataAnalysis}
                      alt="aaps logo"
                    />
                    <h3 className="about__skills-name">Data Analysis</h3>
                  </li>
                  <li className="about__skills-item">
                    <img
                      className="about__skills-img"
                      src={researchSummary}
                      alt="aaps logo"
                    />
                    <h3 className="about__skills-name">Research Summaries</h3>
                  </li>
                </div>
                <div className="about__skills-right">
                  <li className="about__skills-item">
                    <img
                      className="about__skills-img"
                      src={media}
                      alt="aaps logo"
                    />
                    <h3 className="about__skills-name">
                      Social Media Management
                    </h3>
                  </li>
                  <li className="about__skills-item">
                    <img
                      className="about__skills-img"
                      src={quality}
                      alt="aaps logo"
                    />
                    <h3 className="about__skills-name">Quality Assurance</h3>
                  </li>
                  <li className="about__skills-item">
                    <img
                      className="about__skills-img"
                      src={formulation}
                      alt="aaps logo"
                    />
                    <h3 className="about__skills-name">
                      Production Formulation
                    </h3>
                  </li>
                </div>
              </div>
            </div>

            <div className="about__skills-wrapper">
              <h2 className="about__skills-title">Software Engineering</h2>
              <div className="about__skills-sides">
                <div className="about__skills-left">
                  <li className="about__skills-item">
                    <img
                      className="about__skills-img"
                      src={javascript}
                      alt="javascript logo"
                    />
                    <h3 className="about__skills-name">JavaScript</h3>
                  </li>
                  <li className="about__skills-item">
                    <img
                      className="about__skills-img"
                      src={reactLogo}
                      alt="react logo"
                    />
                    <h3 className="about__skills-name">React</h3>
                  </li>
                  <li className="about__skills-item">
                    <img
                      className="about__skills-img"
                      src={node}
                      alt="node logo"
                    />
                    <h3 className="about__skills-name">Node.js</h3>
                  </li>
                  <li className="about__skills-item">
                    <img
                      className="about__skills-img"
                      src={express}
                      alt="express logo"
                    />
                    <h3 className="about__skills-name">Express.js</h3>
                  </li>
                  <li className="about__skills-item">
                    <img
                      className="about__skills-img"
                      src={sql}
                      alt="sql logo"
                    />
                    <h3 className="about__skills-name">mySQL/SQLite</h3>
                  </li>
                  <li className="about__skills-item">
                    <img
                      className="about__skills-img"
                      src={python}
                      alt="python logo"
                    />
                    <h3 className="about__skills-name">Python</h3>
                  </li>
                </div>
                <div className="about__skills-right">
                  <li className="about__skills-item">
                    <img
                      className="about__skills-img"
                      src={django}
                      alt="django logo"
                    />
                    <h3 className="about__skills-name">Django</h3>
                  </li>
                  <li className="about__skills-item">
                    <img
                      className="about__skills-img"
                      src={postman}
                      alt="postman logo"
                    />
                    <h3 className="about__skills-name">Testing</h3>
                  </li>
                  <li className="about__skills-item">
                    <img
                      className="about__skills-img"
                      src={sass}
                      alt="sass logo"
                    />
                    <h3 className="about__skills-name">SASS</h3>
                  </li>
                  <li className="about__skills-item">
                    <img
                      className="about__skills-img"
                      src={api}
                      alt="api logo"
                    />
                    <h3 className="about__skills-name">RESTFUL APIs</h3>
                  </li>
                  <li className="about__skills-item">
                    <img
                      className="about__skills-img"
                      src={auth}
                      alt="authentication logo"
                    />
                    <h3 className="about__skills-name">Authentication</h3>
                  </li>
                  <li className="about__skills-item">
                    <img
                      className="about__skills-img"
                      src={deploy}
                      alt="deployment logo"
                    />
                    <h3 className="about__skills-name">Basic Deployment</h3>
                  </li>
                </div>
              </div>
            </div>

            {/* <h3 className="about__skills-learning">Currently learning: TypeScript, Tailswind</h3> */}
          </ul>
        )}
      </div>
    </div>
  );
}

export default EducationSkills;
