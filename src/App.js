import './App.css'
import React, { Fragment } from 'react'

import Heading from './components/Heading'
import Skills from './components/pages/Skills'
import Navbar from './components/Navbar'
import Portfolio from './components/pages/Portfolio'
import Separator from './components/Separator'
import Education from './components/pages/Education'
import Footer from './components/Footer'
import Contact from './components/pages/Contact'
import Projects from './components/pages/Projects'

function App() {
  return (
    <Fragment>
      <div className="flex flex-col">
        <Navbar />
        <Portfolio />
        <Separator />
        <br />
        <Skills />
        <Separator />
        <Education />
        <Footer />
      </div>
    </Fragment>
  )
}

export default App
