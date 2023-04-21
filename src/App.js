import './App.css'

import React, { Fragment } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import hexa from './assets/images/hexa.png'
import Skills from './components/pages/Skills'
import Separator from './components/Separator'
import amazon from './assets/images/amazon.png'
import Projects from './components/pages/Projects'
import whatsapp from './assets/images/whatsapp.png'
import linkedin from './assets/images/linkedin.png'
import zaincare from './assets/images/zaincare.png'
import Portfolio from './components/pages/Portfolio'
import Education from './components/pages/Education'
import starbucks from './assets/images/starbucks.png'

const projects = [
  {
    id: 1,
    title: 'hexa',
    description: 'landing page',
    link: 'https://apocryphon06-ai-landing-page.netlify.app',
    img: hexa,
  },
  {
    id: 2,
    title: 'linkedin clone',
    description: 'website redesign',
    link: 'https://endearing-parfait-31c67f.netlify.app',
    img: linkedin,
  },
  {
    id: 3,
    title: 'starbucks',
    description: 'website design',
    link: 'https://apocryphon06.github.io/totalitycorp-frontend-challenge/',
    img: starbucks,
  },
  {
    id: 5,
    title: 'zaincare',
    description: 'web application',
    link: 'https://zaincare.scube.me',
    img: zaincare,
  },
  {
    id: 8,
    title: 'whatsapp clone',
    description: 'website design',
    link: 'https://apocryphon06-whatsapp-clone.netlify.app',
    img: whatsapp,
  },
  {
    id: 9,
    title: 'amazon clone',
    description: 'website design',
    link: 'https://apocryphon06-amazon-clone.netlify.app',
    img: amazon,
  },
]

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
        <Separator />
        <Projects projects={projects}/>
        <Footer />
      </div>
    </Fragment>
  )
}

export default App
