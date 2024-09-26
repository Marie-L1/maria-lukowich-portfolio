import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Tech from './components/Tech/Tech'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <Header />
    <Hero />
    <About />
    <Tech />
    <Projects />
    <Footer />
    </>
  )
}

export default App
