import './App.css'
import React from 'react'

import Heading from './components/Heading'
import Skills from './components/Skills'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Portfolio from './components/pages/Portfolio'
import Separator from './components/Separator'

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Intro />
      <Portfolio />
      <Separator />
      <Heading title="My Advantage" />
      <br />
      <Skills />
      <Separator />

      <Heading title="Education & Experience" />

      <div className="grid lg:grid-flow-col grid-flow-row grid-3 p-10 ">
        <div className="flex flex-col ">
          <p className="text-[#656565] py-10">2015 - 2021</p>

          <div className="text-[22px] font-serif">
            B.E in Information Science
          </div>
          <p className="text-[#3a3b3c]">
            Visveswaraya Technological University
          </p>
          <br />
          <div className="text-[22px] font-serif">Pre University Education</div>
          <p className="text-[#3a3b3c]">Mysore Education Society</p>
        </div>

        <div className="flex flex-col ">
          <p className="text-[#656565] py-10">2019 - 2022</p>

          <div className="text-[22px] font-serif">Software Developer - 1</div>
          <p className="text-[#3a3b3c]">Capgemini Technologies Pvt. Ltd.</p>
          <br />
          <div className="text-[22px] font-serif">Web Developer Internship</div>
          <p className="text-[#3a3b3c]">Exposys Data Labs</p>
        </div>

        <div className="flex flex-col ">
          <p className="text-[#656565] py-10">2022 - Present</p>

          <div className="text-[22px] font-serif">Frontend Developer</div>
          <p className="text-[#3a3b3c]">Scubeelate Technologies Pvt. Ltd.</p>
        </div>
      </div>
    </div>
  )
}

export default App
