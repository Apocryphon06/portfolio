import './App.css'

import React, { Fragment } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import hexa from './assets/images/hexa.png'
import Skills from './components/pages/Skills'
import Separator from './components/Separator'
// import amazon from './assets/images/amazon.png'
import Projects from './components/pages/Projects'
import whatsapp from './assets/images/whatsapp.png'
import linkedin from './assets/images/linkedin.png'
import zaincare from './assets/images/zaincare.png'
import Portfolio from './components/pages/Portfolio'
import Education from './components/pages/Education'
import starbucks from './assets/images/starbucks.png'
import inito from './assets/images/inito.png'


const projects = [
  {
    id: 5,
    title: 'zaincare',
    description: 'web application',
    link: 'https://zaincare.com',
    img: zaincare,
  },
  {
    id: 10,
    title: 'inito',
    description: 'website design',
    link: 'https://inito.netlify.app',
    img: inito,
  },
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
    link: 'https://apocryphon06-linkedin-clone.netlify.app',
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
    id: 8,
    title: 'whatsapp clone',
    description: 'website design',
    link: 'https://apocryphon06-whatsapp-clone.netlify.app',
    img: whatsapp,
  },
  // {
  //   id: 9,
  //   title: 'amazon clone',
  //   description: 'website design',
  //   link: 'https://apocryphon06-amazon-clone.netlify.app',
  //   img: amazon,
  // },
  
]

function App() {
  return (
    <Fragment>
      <div className="flex flex-col overflow-x-hidden">
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
