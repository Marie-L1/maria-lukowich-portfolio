import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'

function App() {

  return (
    <>
    <Header />
    <body>
    <Hero />
    <About />
    <Projects />
    </body>
    </>
  )
}

export default App
