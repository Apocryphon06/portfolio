import React from 'react'

import react from '../assets/skills/react.svg'
import html from '../assets/skills/html.svg'
import css from '../assets/skills/css.svg'
import tailwind from '../assets/skills/tailwind.svg'
import javascript from '../assets/skills/javascript.svg'
import typescript from '../assets/skills/typescript.svg'

function Skills() {
  return (
    <div className="grid grid-flow-col grid-6 gap-10 p-10 items-center overflow-x-scroll">
    
        <div className="flex flex-col justify-center items-center">
          <img className="toggleBg" width={100} src={react} alt={react} />
          <p className="text-[#0b0b0b] text-[32px]">92%</p>
          <p>React</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img className="toggleBg" width={100} src={html} alt={html} />
          <p className="text-[#0b0b0b] text-[32px]">87%</p>
          <p>HTML</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img className="toggleBg" width={100} src={css} alt={css} />
          <p className="text-[#0b0b0b] text-[32px]">93%</p>
          <p>CSS</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img
            className="toggleBg"
            width={100}
            src={javascript}
            alt={javascript}
          />
          <p className="text-[#0b0b0b] text-[32px]">81%</p>
          <p>Javascript</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img
            className="toggleBg"
            width={100}
            src={typescript}
            alt={typescript}
          />
          <p className="text-[#0b0b0b] text-[32px]">78%</p>
          <p>Typescript</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img className="toggleBg" width={100} src={tailwind} alt={tailwind} />
          <p className="text-[#0b0b0b] text-[32px]">91%</p>
          <p>Tailwind CSS</p>
        </div>

      </div>
  )
}

export default Skills