import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import EducationSkills from './components/About/EducationSkills'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <Header />
    <Hero />
    <EducationSkills />
    <Projects />
    <Footer />
    </>
  )
}

export default App
