import React, { useState } from "react";
import "./EducationSkills.scss";

function EducationSkills() {
  const [activeSection, setActiveSection] = useState("education");

  return (
    <div className="about">
      <div className="tabs">
        <button onClick={() => setActiveSection('education')} className={activeSection === 'education' ? 'active' : ''}>
          Education
        </button>
        <button onClick={() => setActiveSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>
          Skills
        </button>
      </div>
      <div className="about__wrapper">
        {activeSection === 'education' && (
          <ul className="about__education">
            <div className="about__education-wrapper">
            <h2 className="about__education-title">Education</h2>
            <li className="about__education-item">Software Engineer Diploma, BrainStation</li>
            <li className="about__education-item">Introduction to Programming Using Python, Certificate Harvard CS50</li>
            <li className="about__education-item">Computer Science, Certificate Harvard CS50</li>
            <li className="about__education-item">Food Technology, Safety, and Quality Diploma, AAPS</li>
            <li className="about__education-item">Culinary Arts Diploma, NAIT</li>
            </div>
          </ul>
        )}
      {activeSection === 'skills' && (
        <ul className="about__skills">
          <div className="about__skills-wrapper">
            <h2 className="about__skills-title">Research and Development</h2>
            <li className="about__skills-item">Problem Solving</li>
            <li className="about__skills-item">Data Analysis</li>
            <li className="about__skills-item">Research Summaries</li>
            <li className="about__skills-item">Problem Solving</li>
            <li className="about__skills-item">Product Formulation</li>
            <li className="about__skills-item">Quality Assurance</li>
          </div>

        <div  className="about__skills-wrapper">
            <h2 className="about__skills-title">Software Engineering</h2>
            <li className="about__skills-item">JavaScript</li>
            <li className="about__skills-item">React</li>
            <li className="about__skills-item">Node.js</li>
            <li className="about__skills-item">Express</li>
            <li className="about__skills-item">mySQL/SQLite</li>
            <li className="about__skills-item">Python</li>
            <li className="about__skills-item">Django</li>
            <li className="about__skills-item">SCSS</li>
            <li className="about__skills-item">RESTFUL API's</li>
            <li className="about__skills-item">Authentication</li>
            <li className="about__skills-item">Basic Deployment</li>
        </div>

          {/* <h3 className="about__skills-learning">Currently learning: TypeScript, Tailswind</h3> */}
        </ul>
      )}
    </div>
    </div>
  );
}

export default EducationSkills;
