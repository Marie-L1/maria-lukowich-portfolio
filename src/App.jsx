import { useState } from 'react'
import './App.scss'

function App() {

  return (
    <>
    <header>

    </header>
    <body>
    <section className="hero">
      <img className="hero__img" src="#" alt="#"></img>
      <h2 className="hero__welcome"></h2>
      <div className="hero__contact-wrapper">
        <h3>Contact Me:</h3>
        <a href="#"><img className="hero__linkedin-img" src="#"></img></a>
        <a href="#"><img className="hero__github-img"></img></a>
      </div>
    </section>
    <section className="about">
        <h2 className="about__title">About Me</h2>
      <div className="about__description-wrapper">
        <p className="about__description">

        </p>
      </div>
      <div className="about__education-wrapper">
        <h2 className="about__education-title">Education</h2>
        <p className="about__education-item">Software Engineer Diploma Candidate, BrainStation</p>
        <p className="about__education-item">Food Technology, Safety, and Quality Diploma, AAPS</p>
        <p className="about__education-item">Culinary Arts Diploma, NAIT</p>
        <p className="about__education-item">Introduction to Programming Using Python, Certificate Harvard CS50</p>
        <p className="about__education-item">Computer Science, Certificate Harvard CS50</p>
      </div>
    </section>
    <section className="projects">
      <card className="projects__card">
        <ul className="projects__list">
          <li className="projects__item-img">
            <img className="projects__img"></img>
          </li>
          <li className="projects__item-summary">
            <p></p>
          </li>
          <li className="projects__item-lang">
            <h3></h3>  
          </li>
          <li className="projects__item-link">
            <h2></h2>
          </li>
        </ul>
      </card>
      <card className="projects__card">
        <ul className="projects__list">
          <li className="projects__item-img">
            <img className="projects__img"></img>
          </li>
          <li className="projects__item-summary">
            <p></p>
          </li>
          <li className="projects__item-lang">
            <h3></h3>  
          </li>
          <li className="projects__item-link">
            <h2></h2>
          </li>
        </ul>
      </card>
      <card className="projects__card">
        <ul className="projects__list">
          <li className="projects__item-img">
            <img className="projects__img"></img>
          </li>
          <li className="projects__item-summary">
            <p></p>
          </li>
          <li className="projects__item-lang">
            <h3></h3>  
          </li>
          <li className="projects__item-link">
            <h2></h2>
          </li>
        </ul>
      </card>
    </section>
    </body>
    </>
  )
}

export default App
